/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CertificateProviderInstance - Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.
 */
public class CertificateProviderInstance {
    /**
     * Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluginInstance")
    public String pluginInstance;

    public CertificateProviderInstance withPluginInstance(String pluginInstance) {
        this.pluginInstance = pluginInstance;
        return this;
    }
    
    public CertificateProviderInstance(){}
}
