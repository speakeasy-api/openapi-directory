package openapisdk.models.operations;



public class StorageProjectsServiceAccountGetResponse {
    public String contentType;
    public StorageProjectsServiceAccountGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAccount serviceAccount;
    public StorageProjectsServiceAccountGetResponse withServiceAccount(openapisdk.models.shared.ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    public Long statusCode;
    public StorageProjectsServiceAccountGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}