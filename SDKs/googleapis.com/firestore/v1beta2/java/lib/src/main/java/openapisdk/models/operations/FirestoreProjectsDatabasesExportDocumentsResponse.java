package openapisdk.models.operations;



public class FirestoreProjectsDatabasesExportDocumentsResponse {
    public String contentType;
    public FirestoreProjectsDatabasesExportDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public FirestoreProjectsDatabasesExportDocumentsResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesExportDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}