package openapisdk.models.operations;



public class DatastoreProjectsExportResponse {
    public String contentType;
    public DatastoreProjectsExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DatastoreProjectsExportResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DatastoreProjectsExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}