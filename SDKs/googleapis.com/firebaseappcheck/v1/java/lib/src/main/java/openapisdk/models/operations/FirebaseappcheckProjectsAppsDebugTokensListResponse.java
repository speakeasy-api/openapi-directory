package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsDebugTokensListResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsDebugTokensListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ListDebugTokensResponse googleFirebaseAppcheckV1ListDebugTokensResponse;
    public FirebaseappcheckProjectsAppsDebugTokensListResponse withGoogleFirebaseAppcheckV1ListDebugTokensResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1ListDebugTokensResponse googleFirebaseAppcheckV1ListDebugTokensResponse) {
        this.googleFirebaseAppcheckV1ListDebugTokensResponse = googleFirebaseAppcheckV1ListDebugTokensResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsDebugTokensListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}