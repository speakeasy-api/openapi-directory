package openapisdk.models.operations;



public class StartScreenshotTestResponse {
    public Object accessDenied;
    public StartScreenshotTestResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public StartScreenshotTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbidden;
    public StartScreenshotTestResponse withForbidden(Object forbidden) {
        this.forbidden = forbidden;
        return this;
    }
    public Long statusCode;
    public StartScreenshotTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StartScreenshotBadRequest startScreenshotBadRequest;
    public StartScreenshotTestResponse withStartScreenshotBadRequest(openapisdk.models.shared.StartScreenshotBadRequest startScreenshotBadRequest) {
        this.startScreenshotBadRequest = startScreenshotBadRequest;
        return this;
    }
    public openapisdk.models.shared.StartScreenshotSuccess startScreenshotSuccess;
    public StartScreenshotTestResponse withStartScreenshotSuccess(openapisdk.models.shared.StartScreenshotSuccess startScreenshotSuccess) {
        this.startScreenshotSuccess = startScreenshotSuccess;
        return this;
    }
}