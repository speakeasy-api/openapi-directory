package openapisdk.models.operations;



public class CreateOriginationUrlResponse {
    public String contentType;
    public CreateOriginationUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateOriginationUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkOriginationUrl trunkingV1TrunkOriginationUrl;
    public CreateOriginationUrlResponse withTrunkingV1TrunkOriginationUrl(openapisdk.models.shared.TrunkingV1TrunkOriginationUrl trunkingV1TrunkOriginationUrl) {
        this.trunkingV1TrunkOriginationUrl = trunkingV1TrunkOriginationUrl;
        return this;
    }
}