package openapisdk.models.operations;



public class DfareportingCreativeAssetsInsertResponse {
    public String contentType;
    public DfareportingCreativeAssetsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeAssetMetadata creativeAssetMetadata;
    public DfareportingCreativeAssetsInsertResponse withCreativeAssetMetadata(openapisdk.models.shared.CreativeAssetMetadata creativeAssetMetadata) {
        this.creativeAssetMetadata = creativeAssetMetadata;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeAssetsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}