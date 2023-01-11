package openapisdk.models.operations;



public class ServiceAddTargetResponse {
    public String contentType;
    public ServiceAddTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ServiceAddTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target[] targets;
    public ServiceAddTargetResponse withTargets(openapisdk.models.shared.Target[] targets) {
        this.targets = targets;
        return this;
    }
}