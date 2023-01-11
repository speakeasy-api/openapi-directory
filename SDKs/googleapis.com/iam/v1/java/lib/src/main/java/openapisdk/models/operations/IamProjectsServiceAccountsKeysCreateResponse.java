package openapisdk.models.operations;



public class IamProjectsServiceAccountsKeysCreateResponse {
    public String contentType;
    public IamProjectsServiceAccountsKeysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAccountKey serviceAccountKey;
    public IamProjectsServiceAccountsKeysCreateResponse withServiceAccountKey(openapisdk.models.shared.ServiceAccountKey serviceAccountKey) {
        this.serviceAccountKey = serviceAccountKey;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsKeysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}