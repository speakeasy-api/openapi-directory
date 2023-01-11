package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsSetIamPolicyResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public GkehubProjectsLocationsMembershipsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}