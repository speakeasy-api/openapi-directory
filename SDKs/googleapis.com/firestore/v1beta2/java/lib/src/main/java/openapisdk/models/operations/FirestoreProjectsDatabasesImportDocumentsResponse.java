package openapisdk.models.operations;



public class FirestoreProjectsDatabasesImportDocumentsResponse {
    public String contentType;
    public FirestoreProjectsDatabasesImportDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public FirestoreProjectsDatabasesImportDocumentsResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesImportDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}