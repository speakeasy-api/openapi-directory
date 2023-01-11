package openapisdk.models.operations;



public class ZippedScreenshotsResponse {
    public Object accessDenied;
    public ZippedScreenshotsResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public ZippedScreenshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbidden;
    public ZippedScreenshotsResponse withForbidden(Object forbidden) {
        this.forbidden = forbidden;
        return this;
    }
    public Long statusCode;
    public ZippedScreenshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object screenshotNotFound;
    public ZippedScreenshotsResponse withScreenshotNotFound(Object screenshotNotFound) {
        this.screenshotNotFound = screenshotNotFound;
        return this;
    }
    public openapisdk.models.shared.ZippedScreenshotsSuccess zippedScreenshotsSuccess;
    public ZippedScreenshotsResponse withZippedScreenshotsSuccess(openapisdk.models.shared.ZippedScreenshotsSuccess zippedScreenshotsSuccess) {
        this.zippedScreenshotsSuccess = zippedScreenshotsSuccess;
        return this;
    }
}