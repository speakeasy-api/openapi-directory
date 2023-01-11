package openapisdk.models.operations;



public class CreateTrunkResponse {
    public String contentType;
    public CreateTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1Trunk trunkingV1Trunk;
    public CreateTrunkResponse withTrunkingV1Trunk(openapisdk.models.shared.TrunkingV1Trunk trunkingV1Trunk) {
        this.trunkingV1Trunk = trunkingV1Trunk;
        return this;
    }
}