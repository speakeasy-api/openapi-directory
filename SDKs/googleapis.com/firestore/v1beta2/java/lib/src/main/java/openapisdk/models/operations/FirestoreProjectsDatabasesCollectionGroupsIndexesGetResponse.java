package openapisdk.models.operations;



public class FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse {
    public String contentType;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirestoreAdminV1beta2Index googleFirestoreAdminV1beta2Index;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse withGoogleFirestoreAdminV1beta2Index(openapisdk.models.shared.GoogleFirestoreAdminV1beta2Index googleFirestoreAdminV1beta2Index) {
        this.googleFirestoreAdminV1beta2Index = googleFirestoreAdminV1beta2Index;
        return this;
    }
    public Long statusCode;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}