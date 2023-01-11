package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartScreenshotTestRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScreenshotPayload request;
    public StartScreenshotTestRequest withRequest(openapisdk.models.shared.ScreenshotPayload request) {
        this.request = request;
        return this;
    }
    public StartScreenshotTestSecurity security;
    public StartScreenshotTestRequest withSecurity(StartScreenshotTestSecurity security) {
        this.security = security;
        return this;
    }
}