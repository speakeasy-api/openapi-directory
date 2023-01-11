package openapisdk.models.operations;



public class DnsPoliciesUpdateResponse {
    public String contentType;
    public DnsPoliciesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PoliciesUpdateResponse policiesUpdateResponse;
    public DnsPoliciesUpdateResponse withPoliciesUpdateResponse(openapisdk.models.shared.PoliciesUpdateResponse policiesUpdateResponse) {
        this.policiesUpdateResponse = policiesUpdateResponse;
        return this;
    }
    public Long statusCode;
    public DnsPoliciesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}