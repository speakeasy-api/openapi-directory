package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CloudStoragePath
 * Message representing a single file or path in Cloud Storage.
**/
public class GooglePrivacyDlpV2CloudStoragePath {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GooglePrivacyDlpV2CloudStoragePath withPath(String path) {
        this.path = path;
        return this;
    }
}