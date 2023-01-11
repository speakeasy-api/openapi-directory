package openapisdk.models.operations;



public class IamProjectsServiceAccountsUpdateResponse {
    public String contentType;
    public IamProjectsServiceAccountsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAccount serviceAccount;
    public IamProjectsServiceAccountsUpdateResponse withServiceAccount(openapisdk.models.shared.ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}