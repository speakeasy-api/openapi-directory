package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersDeactivateRequest {
    public DisplayvideoAdvertisersManualTriggersDeactivatePathParams pathParams;
    public DisplayvideoAdvertisersManualTriggersDeactivateRequest withPathParams(DisplayvideoAdvertisersManualTriggersDeactivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersDeactivateQueryParams queryParams;
    public DisplayvideoAdvertisersManualTriggersDeactivateRequest withQueryParams(DisplayvideoAdvertisersManualTriggersDeactivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisplayvideoAdvertisersManualTriggersDeactivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersDeactivateSecurity security;
    public DisplayvideoAdvertisersManualTriggersDeactivateRequest withSecurity(DisplayvideoAdvertisersManualTriggersDeactivateSecurity security) {
        this.security = security;
        return this;
    }
}