package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateManifestResponseBodyManifestDownload
 * Object containing the href link to download the manifest file
**/
public class CreateManifestResponseBodyManifestDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CreateManifestResponseBodyManifestDownload withHref(String href) {
        this.href = href;
        return this;
    }
}