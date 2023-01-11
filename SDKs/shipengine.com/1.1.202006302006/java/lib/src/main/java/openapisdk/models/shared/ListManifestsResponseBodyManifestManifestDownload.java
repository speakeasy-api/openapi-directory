package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListManifestsResponseBodyManifestManifestDownload
 * Object containing the href link to download the manifest file
**/
public class ListManifestsResponseBodyManifestManifestDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ListManifestsResponseBodyManifestManifestDownload withHref(String href) {
        this.href = href;
        return this;
    }
}