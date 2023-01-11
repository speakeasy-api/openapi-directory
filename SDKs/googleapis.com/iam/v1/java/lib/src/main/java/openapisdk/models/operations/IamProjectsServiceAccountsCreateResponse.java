package openapisdk.models.operations;



public class IamProjectsServiceAccountsCreateResponse {
    public String contentType;
    public IamProjectsServiceAccountsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAccount serviceAccount;
    public IamProjectsServiceAccountsCreateResponse withServiceAccount(openapisdk.models.shared.ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}