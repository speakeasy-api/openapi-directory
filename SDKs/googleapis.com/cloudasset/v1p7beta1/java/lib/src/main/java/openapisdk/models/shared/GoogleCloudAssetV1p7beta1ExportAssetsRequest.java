package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p7beta1ExportAssetsRequest
 * Export asset request.
**/
public class GoogleCloudAssetV1p7beta1ExportAssetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTypes")
    public String[] assetTypes;
    public GoogleCloudAssetV1p7beta1ExportAssetsRequest withAssetTypes(String[] assetTypes) {
        this.assetTypes = assetTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum contentType;
    public GoogleCloudAssetV1p7beta1ExportAssetsRequest withContentType(GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public GoogleCloudAssetV1p7beta1OutputConfig outputConfig;
    public GoogleCloudAssetV1p7beta1ExportAssetsRequest withOutputConfig(GoogleCloudAssetV1p7beta1OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public GoogleCloudAssetV1p7beta1ExportAssetsRequest withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipTypes")
    public String[] relationshipTypes;
    public GoogleCloudAssetV1p7beta1ExportAssetsRequest withRelationshipTypes(String[] relationshipTypes) {
        this.relationshipTypes = relationshipTypes;
        return this;
    }
}