package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsDebugTokensListResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsDebugTokensListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaListDebugTokensResponse googleFirebaseAppcheckV1betaListDebugTokensResponse;
    public FirebaseappcheckProjectsAppsDebugTokensListResponse withGoogleFirebaseAppcheckV1betaListDebugTokensResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaListDebugTokensResponse googleFirebaseAppcheckV1betaListDebugTokensResponse) {
        this.googleFirebaseAppcheckV1betaListDebugTokensResponse = googleFirebaseAppcheckV1betaListDebugTokensResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsDebugTokensListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}