package openapisdk.models.operations;



public class FetchTrunkResponse {
    public String contentType;
    public FetchTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1Trunk trunkingV1Trunk;
    public FetchTrunkResponse withTrunkingV1Trunk(openapisdk.models.shared.TrunkingV1Trunk trunkingV1Trunk) {
        this.trunkingV1Trunk = trunkingV1Trunk;
        return this;
    }
}