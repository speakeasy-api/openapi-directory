package openapisdk.models.operations;



public class ServiceDeleteTargetResponse {
    public String contentType;
    public ServiceDeleteTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ServiceDeleteTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target[] targets;
    public ServiceDeleteTargetResponse withTargets(openapisdk.models.shared.Target[] targets) {
        this.targets = targets;
        return this;
    }
}