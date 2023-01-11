package openapisdk.models.operations;



public class ScreenshotsResponse {
    public Object accessDenied;
    public ScreenshotsResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public ScreenshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbidden;
    public ScreenshotsResponse withForbidden(Object forbidden) {
        this.forbidden = forbidden;
        return this;
    }
    public Long statusCode;
    public ScreenshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScreenshotDetails screenshotDetails;
    public ScreenshotsResponse withScreenshotDetails(openapisdk.models.shared.ScreenshotDetails screenshotDetails) {
        this.screenshotDetails = screenshotDetails;
        return this;
    }
    public Object screenshotNotFound;
    public ScreenshotsResponse withScreenshotNotFound(Object screenshotNotFound) {
        this.screenshotNotFound = screenshotNotFound;
        return this;
    }
}