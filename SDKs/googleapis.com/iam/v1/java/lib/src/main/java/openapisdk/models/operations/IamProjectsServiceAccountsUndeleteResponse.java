package openapisdk.models.operations;



public class IamProjectsServiceAccountsUndeleteResponse {
    public String contentType;
    public IamProjectsServiceAccountsUndeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsUndeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UndeleteServiceAccountResponse undeleteServiceAccountResponse;
    public IamProjectsServiceAccountsUndeleteResponse withUndeleteServiceAccountResponse(openapisdk.models.shared.UndeleteServiceAccountResponse undeleteServiceAccountResponse) {
        this.undeleteServiceAccountResponse = undeleteServiceAccountResponse;
        return this;
    }
}