package openapisdk.models.operations;



public class FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse {
    public String contentType;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirestoreAdminV1beta2ListFieldsResponse googleFirestoreAdminV1beta2ListFieldsResponse;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse withGoogleFirestoreAdminV1beta2ListFieldsResponse(openapisdk.models.shared.GoogleFirestoreAdminV1beta2ListFieldsResponse googleFirestoreAdminV1beta2ListFieldsResponse) {
        this.googleFirestoreAdminV1beta2ListFieldsResponse = googleFirestoreAdminV1beta2ListFieldsResponse;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}