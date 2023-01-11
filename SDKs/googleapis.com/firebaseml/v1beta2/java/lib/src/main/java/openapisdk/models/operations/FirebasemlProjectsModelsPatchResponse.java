package openapisdk.models.operations;



public class FirebasemlProjectsModelsPatchResponse {
    public String contentType;
    public FirebasemlProjectsModelsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public FirebasemlProjectsModelsPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public FirebasemlProjectsModelsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}