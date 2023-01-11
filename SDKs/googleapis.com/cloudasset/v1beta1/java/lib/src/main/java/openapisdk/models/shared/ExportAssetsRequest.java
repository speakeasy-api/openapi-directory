package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportAssetsRequest
 * Export asset request.
**/
public class ExportAssetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTypes")
    public String[] assetTypes;
    public ExportAssetsRequest withAssetTypes(String[] assetTypes) {
        this.assetTypes = assetTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public ExportAssetsRequestContentTypeEnum contentType;
    public ExportAssetsRequest withContentType(ExportAssetsRequestContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public OutputConfig outputConfig;
    public ExportAssetsRequest withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public ExportAssetsRequest withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
}