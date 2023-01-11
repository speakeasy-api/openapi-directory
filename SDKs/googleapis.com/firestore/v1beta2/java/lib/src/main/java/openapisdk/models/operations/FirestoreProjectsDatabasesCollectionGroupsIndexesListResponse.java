package openapisdk.models.operations;



public class FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse {
    public String contentType;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirestoreAdminV1beta2ListIndexesResponse googleFirestoreAdminV1beta2ListIndexesResponse;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse withGoogleFirestoreAdminV1beta2ListIndexesResponse(openapisdk.models.shared.GoogleFirestoreAdminV1beta2ListIndexesResponse googleFirestoreAdminV1beta2ListIndexesResponse) {
        this.googleFirestoreAdminV1beta2ListIndexesResponse = googleFirestoreAdminV1beta2ListIndexesResponse;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}