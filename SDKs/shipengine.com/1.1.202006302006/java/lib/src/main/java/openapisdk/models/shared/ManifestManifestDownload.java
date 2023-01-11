package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManifestManifestDownload
 * Object containing the href link to download the manifest file
**/
public class ManifestManifestDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ManifestManifestDownload withHref(String href) {
        this.href = href;
        return this;
    }
}