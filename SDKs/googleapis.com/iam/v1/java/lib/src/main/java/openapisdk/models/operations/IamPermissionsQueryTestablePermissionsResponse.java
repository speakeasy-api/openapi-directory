package openapisdk.models.operations;



public class IamPermissionsQueryTestablePermissionsResponse {
    public String contentType;
    public IamPermissionsQueryTestablePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryTestablePermissionsResponse queryTestablePermissionsResponse;
    public IamPermissionsQueryTestablePermissionsResponse withQueryTestablePermissionsResponse(openapisdk.models.shared.QueryTestablePermissionsResponse queryTestablePermissionsResponse) {
        this.queryTestablePermissionsResponse = queryTestablePermissionsResponse;
        return this;
    }
    public Long statusCode;
    public IamPermissionsQueryTestablePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}