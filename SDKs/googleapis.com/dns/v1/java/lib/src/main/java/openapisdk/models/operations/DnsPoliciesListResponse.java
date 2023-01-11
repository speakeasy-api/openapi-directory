package openapisdk.models.operations;



public class DnsPoliciesListResponse {
    public String contentType;
    public DnsPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PoliciesListResponse policiesListResponse;
    public DnsPoliciesListResponse withPoliciesListResponse(openapisdk.models.shared.PoliciesListResponse policiesListResponse) {
        this.policiesListResponse = policiesListResponse;
        return this;
    }
    public Long statusCode;
    public DnsPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}