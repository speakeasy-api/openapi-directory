package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretVolumeSource
 * A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
**/
public class SecretVolumeSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultMode")
    public Integer defaultMode;
    public SecretVolumeSource withDefaultMode(Integer defaultMode) {
        this.defaultMode = defaultMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public KeyToPath[] items;
    public SecretVolumeSource withItems(KeyToPath[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public SecretVolumeSource withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretName")
    public String secretName;
    public SecretVolumeSource withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}