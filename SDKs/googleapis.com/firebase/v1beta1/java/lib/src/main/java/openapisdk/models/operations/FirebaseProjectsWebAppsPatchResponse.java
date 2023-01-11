package openapisdk.models.operations;



public class FirebaseProjectsWebAppsPatchResponse {
    public String contentType;
    public FirebaseProjectsWebAppsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsWebAppsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebApp webApp;
    public FirebaseProjectsWebAppsPatchResponse withWebApp(openapisdk.models.shared.WebApp webApp) {
        this.webApp = webApp;
        return this;
    }
}