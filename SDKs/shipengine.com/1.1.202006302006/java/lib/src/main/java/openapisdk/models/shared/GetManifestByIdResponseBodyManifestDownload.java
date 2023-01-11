package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetManifestByIdResponseBodyManifestDownload
 * Object containing the href link to download the manifest file
**/
public class GetManifestByIdResponseBodyManifestDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetManifestByIdResponseBodyManifestDownload withHref(String href) {
        this.href = href;
        return this;
    }
}