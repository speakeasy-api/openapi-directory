package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedStandaloneApk
 * Download metadata for a standalone APK.
**/
public class GeneratedStandaloneApk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadId")
    public String downloadId;
    public GeneratedStandaloneApk withDownloadId(String downloadId) {
        this.downloadId = downloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantId")
    public Integer variantId;
    public GeneratedStandaloneApk withVariantId(Integer variantId) {
        this.variantId = variantId;
        return this;
    }
}