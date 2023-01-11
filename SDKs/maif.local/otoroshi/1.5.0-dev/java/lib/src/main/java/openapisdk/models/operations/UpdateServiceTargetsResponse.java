package openapisdk.models.operations;



public class UpdateServiceTargetsResponse {
    public String contentType;
    public UpdateServiceTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target[] targets;
    public UpdateServiceTargetsResponse withTargets(openapisdk.models.shared.Target[] targets) {
        this.targets = targets;
        return this;
    }
}