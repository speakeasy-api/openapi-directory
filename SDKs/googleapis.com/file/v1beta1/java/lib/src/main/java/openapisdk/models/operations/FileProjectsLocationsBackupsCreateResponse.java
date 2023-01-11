package openapisdk.models.operations;



public class FileProjectsLocationsBackupsCreateResponse {
    public String contentType;
    public FileProjectsLocationsBackupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public FileProjectsLocationsBackupsCreateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsBackupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}