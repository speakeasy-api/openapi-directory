package openapisdk.models.operations;



public class IamProjectsServiceAccountsPatchResponse {
    public String contentType;
    public IamProjectsServiceAccountsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAccount serviceAccount;
    public IamProjectsServiceAccountsPatchResponse withServiceAccount(openapisdk.models.shared.ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}