package openapisdk.models.operations;



public class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse {
    public String contentType;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}