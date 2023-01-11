package openapisdk.models.operations;



public class FirebaseProjectsIosAppsListResponse {
    public String contentType;
    public FirebaseProjectsIosAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListIosAppsResponse listIosAppsResponse;
    public FirebaseProjectsIosAppsListResponse withListIosAppsResponse(openapisdk.models.shared.ListIosAppsResponse listIosAppsResponse) {
        this.listIosAppsResponse = listIosAppsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsIosAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}