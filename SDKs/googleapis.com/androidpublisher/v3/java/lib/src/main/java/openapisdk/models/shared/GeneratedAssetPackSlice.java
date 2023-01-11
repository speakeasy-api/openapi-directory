package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedAssetPackSlice
 * Download metadata for an asset pack slice.
**/
public class GeneratedAssetPackSlice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadId")
    public String downloadId;
    public GeneratedAssetPackSlice withDownloadId(String downloadId) {
        this.downloadId = downloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moduleName")
    public String moduleName;
    public GeneratedAssetPackSlice withModuleName(String moduleName) {
        this.moduleName = moduleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sliceId")
    public String sliceId;
    public GeneratedAssetPackSlice withSliceId(String sliceId) {
        this.sliceId = sliceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GeneratedAssetPackSlice withVersion(String version) {
        this.version = version;
        return this;
    }
}