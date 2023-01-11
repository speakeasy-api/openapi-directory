package openapisdk.models.operations;



public class FirebaseProjectsAndroidAppsListResponse {
    public String contentType;
    public FirebaseProjectsAndroidAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAndroidAppsResponse listAndroidAppsResponse;
    public FirebaseProjectsAndroidAppsListResponse withListAndroidAppsResponse(openapisdk.models.shared.ListAndroidAppsResponse listAndroidAppsResponse) {
        this.listAndroidAppsResponse = listAndroidAppsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsAndroidAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}