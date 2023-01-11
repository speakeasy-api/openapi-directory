package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2FileSet
 * Set of files to scan.
**/
public class GooglePrivacyDlpV2FileSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexFileSet")
    public GooglePrivacyDlpV2CloudStorageRegexFileSet regexFileSet;
    public GooglePrivacyDlpV2FileSet withRegexFileSet(GooglePrivacyDlpV2CloudStorageRegexFileSet regexFileSet) {
        this.regexFileSet = regexFileSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GooglePrivacyDlpV2FileSet withUrl(String url) {
        this.url = url;
        return this;
    }
}