package openapisdk.models.operations;



public class DatamigrationProjectsLocationsMigrationJobsPatchResponse {
    public String contentType;
    public DatamigrationProjectsLocationsMigrationJobsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DatamigrationProjectsLocationsMigrationJobsPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsMigrationJobsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}