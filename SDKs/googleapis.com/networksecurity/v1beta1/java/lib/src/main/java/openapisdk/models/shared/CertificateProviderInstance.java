package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateProviderInstance
 * Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.
**/
public class CertificateProviderInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluginInstance")
    public String pluginInstance;
    public CertificateProviderInstance withPluginInstance(String pluginInstance) {
        this.pluginInstance = pluginInstance;
        return this;
    }
}