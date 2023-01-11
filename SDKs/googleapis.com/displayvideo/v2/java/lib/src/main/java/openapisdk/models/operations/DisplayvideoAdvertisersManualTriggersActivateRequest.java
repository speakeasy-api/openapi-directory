package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersActivateRequest {
    public DisplayvideoAdvertisersManualTriggersActivatePathParams pathParams;
    public DisplayvideoAdvertisersManualTriggersActivateRequest withPathParams(DisplayvideoAdvertisersManualTriggersActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersActivateQueryParams queryParams;
    public DisplayvideoAdvertisersManualTriggersActivateRequest withQueryParams(DisplayvideoAdvertisersManualTriggersActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisplayvideoAdvertisersManualTriggersActivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersActivateSecurity security;
    public DisplayvideoAdvertisersManualTriggersActivateRequest withSecurity(DisplayvideoAdvertisersManualTriggersActivateSecurity security) {
        this.security = security;
        return this;
    }
}