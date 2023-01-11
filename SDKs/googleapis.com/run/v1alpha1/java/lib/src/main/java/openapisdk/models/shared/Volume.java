package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * Volume represents a named volume in a container.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configMap")
    public ConfigMapVolumeSource configMap;
    public Volume withConfigMap(ConfigMapVolumeSource configMap) {
        this.configMap = configMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Volume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public SecretVolumeSource secret;
    public Volume withSecret(SecretVolumeSource secret) {
        this.secret = secret;
        return this;
    }
}