package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesListResponse {
    public String contentType;
    public AccesscontextmanagerAccessPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccessPoliciesResponse listAccessPoliciesResponse;
    public AccesscontextmanagerAccessPoliciesListResponse withListAccessPoliciesResponse(openapisdk.models.shared.ListAccessPoliciesResponse listAccessPoliciesResponse) {
        this.listAccessPoliciesResponse = listAccessPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerAccessPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}