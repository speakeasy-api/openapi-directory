package openapisdk.models.operations;



public class IamProjectsServiceAccountsListResponse {
    public String contentType;
    public IamProjectsServiceAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServiceAccountsResponse listServiceAccountsResponse;
    public IamProjectsServiceAccountsListResponse withListServiceAccountsResponse(openapisdk.models.shared.ListServiceAccountsResponse listServiceAccountsResponse) {
        this.listServiceAccountsResponse = listServiceAccountsResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}