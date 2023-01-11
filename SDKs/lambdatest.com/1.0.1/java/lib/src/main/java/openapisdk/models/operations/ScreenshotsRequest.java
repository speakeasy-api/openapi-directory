package openapisdk.models.operations;



public class ScreenshotsRequest {
    public ScreenshotsPathParams pathParams;
    public ScreenshotsRequest withPathParams(ScreenshotsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ScreenshotsSecurity security;
    public ScreenshotsRequest withSecurity(ScreenshotsSecurity security) {
        this.security = security;
        return this;
    }
}