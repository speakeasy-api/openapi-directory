package openapisdk.models.operations;



public class UpdateOriginationUrlResponse {
    public String contentType;
    public UpdateOriginationUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateOriginationUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkOriginationUrl trunkingV1TrunkOriginationUrl;
    public UpdateOriginationUrlResponse withTrunkingV1TrunkOriginationUrl(openapisdk.models.shared.TrunkingV1TrunkOriginationUrl trunkingV1TrunkOriginationUrl) {
        this.trunkingV1TrunkOriginationUrl = trunkingV1TrunkOriginationUrl;
        return this;
    }
}