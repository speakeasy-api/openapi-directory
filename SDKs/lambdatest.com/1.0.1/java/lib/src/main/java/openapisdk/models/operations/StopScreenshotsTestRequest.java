package openapisdk.models.operations;



public class StopScreenshotsTestRequest {
    public StopScreenshotsTestPathParams pathParams;
    public StopScreenshotsTestRequest withPathParams(StopScreenshotsTestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopScreenshotsTestSecurity security;
    public StopScreenshotsTestRequest withSecurity(StopScreenshotsTestSecurity security) {
        this.security = security;
        return this;
    }
}