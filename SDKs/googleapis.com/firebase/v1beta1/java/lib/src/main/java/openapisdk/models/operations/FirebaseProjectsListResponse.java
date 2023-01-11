package openapisdk.models.operations;



public class FirebaseProjectsListResponse {
    public String contentType;
    public FirebaseProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFirebaseProjectsResponse listFirebaseProjectsResponse;
    public FirebaseProjectsListResponse withListFirebaseProjectsResponse(openapisdk.models.shared.ListFirebaseProjectsResponse listFirebaseProjectsResponse) {
        this.listFirebaseProjectsResponse = listFirebaseProjectsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}