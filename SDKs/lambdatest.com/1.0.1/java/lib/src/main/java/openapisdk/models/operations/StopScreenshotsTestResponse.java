package openapisdk.models.operations;



public class StopScreenshotsTestResponse {
    public Object accessDenied;
    public StopScreenshotsTestResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public StopScreenshotsTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbidden;
    public StopScreenshotsTestResponse withForbidden(Object forbidden) {
        this.forbidden = forbidden;
        return this;
    }
    public Long statusCode;
    public StopScreenshotsTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object stopScreenshotNotFound;
    public StopScreenshotsTestResponse withStopScreenshotNotFound(Object stopScreenshotNotFound) {
        this.stopScreenshotNotFound = stopScreenshotNotFound;
        return this;
    }
    public Object stopScreenshotSuccess;
    public StopScreenshotsTestResponse withStopScreenshotSuccess(Object stopScreenshotSuccess) {
        this.stopScreenshotSuccess = stopScreenshotSuccess;
        return this;
    }
}