package openapisdk.models.operations;



public class IamProjectsServiceAccountsKeysUploadResponse {
    public String contentType;
    public IamProjectsServiceAccountsKeysUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAccountKey serviceAccountKey;
    public IamProjectsServiceAccountsKeysUploadResponse withServiceAccountKey(openapisdk.models.shared.ServiceAccountKey serviceAccountKey) {
        this.serviceAccountKey = serviceAccountKey;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsKeysUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}