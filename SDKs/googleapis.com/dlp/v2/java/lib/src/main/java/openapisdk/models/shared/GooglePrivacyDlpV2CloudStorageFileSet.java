package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CloudStorageFileSet
 * Message representing a set of files in Cloud Storage.
**/
public class GooglePrivacyDlpV2CloudStorageFileSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GooglePrivacyDlpV2CloudStorageFileSet withUrl(String url) {
        this.url = url;
        return this;
    }
}