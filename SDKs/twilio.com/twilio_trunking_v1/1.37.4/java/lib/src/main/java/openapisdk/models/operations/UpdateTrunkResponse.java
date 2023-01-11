package openapisdk.models.operations;



public class UpdateTrunkResponse {
    public String contentType;
    public UpdateTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1Trunk trunkingV1Trunk;
    public UpdateTrunkResponse withTrunkingV1Trunk(openapisdk.models.shared.TrunkingV1Trunk trunkingV1Trunk) {
        this.trunkingV1Trunk = trunkingV1Trunk;
        return this;
    }
}