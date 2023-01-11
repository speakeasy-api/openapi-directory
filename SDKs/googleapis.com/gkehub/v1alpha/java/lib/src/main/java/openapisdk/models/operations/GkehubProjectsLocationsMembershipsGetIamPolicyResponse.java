package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsGetIamPolicyResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public GkehubProjectsLocationsMembershipsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}