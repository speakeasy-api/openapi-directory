package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesServicePerimetersListResponse {
    public String contentType;
    public AccesscontextmanagerAccessPoliciesServicePerimetersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServicePerimetersResponse listServicePerimetersResponse;
    public AccesscontextmanagerAccessPoliciesServicePerimetersListResponse withListServicePerimetersResponse(openapisdk.models.shared.ListServicePerimetersResponse listServicePerimetersResponse) {
        this.listServicePerimetersResponse = listServicePerimetersResponse;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerAccessPoliciesServicePerimetersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}