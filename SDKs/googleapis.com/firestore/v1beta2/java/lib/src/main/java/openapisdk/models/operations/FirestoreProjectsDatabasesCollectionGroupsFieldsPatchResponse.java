package openapisdk.models.operations;



public class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse {
    public String contentType;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}