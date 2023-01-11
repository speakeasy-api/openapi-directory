package openapisdk.models.operations;



public class IamProjectsServiceAccountsKeysListResponse {
    public String contentType;
    public IamProjectsServiceAccountsKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServiceAccountKeysResponse listServiceAccountKeysResponse;
    public IamProjectsServiceAccountsKeysListResponse withListServiceAccountKeysResponse(openapisdk.models.shared.ListServiceAccountKeysResponse listServiceAccountKeysResponse) {
        this.listServiceAccountKeysResponse = listServiceAccountKeysResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}