package openapisdk.models.operations;



public class FirebaseProjectsSearchAppsResponse {
    public String contentType;
    public FirebaseProjectsSearchAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchFirebaseAppsResponse searchFirebaseAppsResponse;
    public FirebaseProjectsSearchAppsResponse withSearchFirebaseAppsResponse(openapisdk.models.shared.SearchFirebaseAppsResponse searchFirebaseAppsResponse) {
        this.searchFirebaseAppsResponse = searchFirebaseAppsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsSearchAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}