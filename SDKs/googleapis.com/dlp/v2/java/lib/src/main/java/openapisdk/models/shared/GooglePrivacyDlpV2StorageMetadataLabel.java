package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StorageMetadataLabel
 * Storage metadata label to indicate which metadata entry contains findings.
**/
public class GooglePrivacyDlpV2StorageMetadataLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public GooglePrivacyDlpV2StorageMetadataLabel withKey(String key) {
        this.key = key;
        return this;
    }
}