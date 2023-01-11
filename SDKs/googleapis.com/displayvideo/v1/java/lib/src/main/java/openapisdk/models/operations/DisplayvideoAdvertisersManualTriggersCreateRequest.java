package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersCreateRequest {
    public DisplayvideoAdvertisersManualTriggersCreatePathParams pathParams;
    public DisplayvideoAdvertisersManualTriggersCreateRequest withPathParams(DisplayvideoAdvertisersManualTriggersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersCreateQueryParams queryParams;
    public DisplayvideoAdvertisersManualTriggersCreateRequest withQueryParams(DisplayvideoAdvertisersManualTriggersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManualTriggerInput request;
    public DisplayvideoAdvertisersManualTriggersCreateRequest withRequest(openapisdk.models.shared.ManualTriggerInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersCreateSecurity security;
    public DisplayvideoAdvertisersManualTriggersCreateRequest withSecurity(DisplayvideoAdvertisersManualTriggersCreateSecurity security) {
        this.security = security;
        return this;
    }
}