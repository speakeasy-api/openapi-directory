package openapisdk.models.operations;



public class FirebaseProjectsWebAppsRemoveResponse {
    public String contentType;
    public FirebaseProjectsWebAppsRemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public FirebaseProjectsWebAppsRemoveResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsWebAppsRemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}