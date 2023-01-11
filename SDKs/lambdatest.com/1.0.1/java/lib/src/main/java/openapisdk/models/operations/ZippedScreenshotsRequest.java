package openapisdk.models.operations;



public class ZippedScreenshotsRequest {
    public ZippedScreenshotsPathParams pathParams;
    public ZippedScreenshotsRequest withPathParams(ZippedScreenshotsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ZippedScreenshotsSecurity security;
    public ZippedScreenshotsRequest withSecurity(ZippedScreenshotsSecurity security) {
        this.security = security;
        return this;
    }
}