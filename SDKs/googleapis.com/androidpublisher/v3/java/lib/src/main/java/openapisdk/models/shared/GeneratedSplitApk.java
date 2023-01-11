package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedSplitApk
 * Download metadata for a split APK.
**/
public class GeneratedSplitApk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadId")
    public String downloadId;
    public GeneratedSplitApk withDownloadId(String downloadId) {
        this.downloadId = downloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moduleName")
    public String moduleName;
    public GeneratedSplitApk withModuleName(String moduleName) {
        this.moduleName = moduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splitId")
    public String splitId;
    public GeneratedSplitApk withSplitId(String splitId) {
        this.splitId = splitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantId")
    public Integer variantId;
    public GeneratedSplitApk withVariantId(Integer variantId) {
        this.variantId = variantId;
        return this;
    }
}