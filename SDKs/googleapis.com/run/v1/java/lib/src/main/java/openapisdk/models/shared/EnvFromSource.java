package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvFromSource
 * Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps
**/
public class EnvFromSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configMapRef")
    public ConfigMapEnvSource configMapRef;
    public EnvFromSource withConfigMapRef(ConfigMapEnvSource configMapRef) {
        this.configMapRef = configMapRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public EnvFromSource withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretRef")
    public SecretEnvSource secretRef;
    public EnvFromSource withSecretRef(SecretEnvSource secretRef) {
        this.secretRef = secretRef;
        return this;
    }
}