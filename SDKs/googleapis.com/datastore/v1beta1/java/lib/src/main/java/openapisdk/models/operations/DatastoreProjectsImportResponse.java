package openapisdk.models.operations;



public class DatastoreProjectsImportResponse {
    public String contentType;
    public DatastoreProjectsImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DatastoreProjectsImportResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DatastoreProjectsImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}