package openapisdk.models.operations;



public class FirebaseProjectsWebAppsListResponse {
    public String contentType;
    public FirebaseProjectsWebAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWebAppsResponse listWebAppsResponse;
    public FirebaseProjectsWebAppsListResponse withListWebAppsResponse(openapisdk.models.shared.ListWebAppsResponse listWebAppsResponse) {
        this.listWebAppsResponse = listWebAppsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsWebAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}