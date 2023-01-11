package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2SecretVolumeSource
 * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
**/
public class GoogleCloudRunV2SecretVolumeSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultMode")
    public Integer defaultMode;
    public GoogleCloudRunV2SecretVolumeSource withDefaultMode(Integer defaultMode) {
        this.defaultMode = defaultMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public GoogleCloudRunV2VersionToPath[] items;
    public GoogleCloudRunV2SecretVolumeSource withItems(GoogleCloudRunV2VersionToPath[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public GoogleCloudRunV2SecretVolumeSource withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}