package openapisdk.models.operations;



public class FetchOriginationUrlResponse {
    public String contentType;
    public FetchOriginationUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchOriginationUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkOriginationUrl trunkingV1TrunkOriginationUrl;
    public FetchOriginationUrlResponse withTrunkingV1TrunkOriginationUrl(openapisdk.models.shared.TrunkingV1TrunkOriginationUrl trunkingV1TrunkOriginationUrl) {
        this.trunkingV1TrunkOriginationUrl = trunkingV1TrunkOriginationUrl;
        return this;
    }
}