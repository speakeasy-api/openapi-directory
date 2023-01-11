package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesAccessLevelsListResponse {
    public String contentType;
    public AccesscontextmanagerAccessPoliciesAccessLevelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccessLevelsResponse listAccessLevelsResponse;
    public AccesscontextmanagerAccessPoliciesAccessLevelsListResponse withListAccessLevelsResponse(openapisdk.models.shared.ListAccessLevelsResponse listAccessLevelsResponse) {
        this.listAccessLevelsResponse = listAccessLevelsResponse;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerAccessPoliciesAccessLevelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}