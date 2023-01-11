package openapisdk.models.operations;



public class ServiceTargetsResponse {
    public String contentType;
    public ServiceTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ServiceTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target[] targets;
    public ServiceTargetsResponse withTargets(openapisdk.models.shared.Target[] targets) {
        this.targets = targets;
        return this;
    }
}