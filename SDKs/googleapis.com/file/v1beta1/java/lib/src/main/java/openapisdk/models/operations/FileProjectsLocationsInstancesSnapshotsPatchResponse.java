package openapisdk.models.operations;



public class FileProjectsLocationsInstancesSnapshotsPatchResponse {
    public String contentType;
    public FileProjectsLocationsInstancesSnapshotsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public FileProjectsLocationsInstancesSnapshotsPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsInstancesSnapshotsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}