package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersPatchRequest {
    public DisplayvideoAdvertisersManualTriggersPatchPathParams pathParams;
    public DisplayvideoAdvertisersManualTriggersPatchRequest withPathParams(DisplayvideoAdvertisersManualTriggersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersPatchQueryParams queryParams;
    public DisplayvideoAdvertisersManualTriggersPatchRequest withQueryParams(DisplayvideoAdvertisersManualTriggersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManualTriggerInput request;
    public DisplayvideoAdvertisersManualTriggersPatchRequest withRequest(openapisdk.models.shared.ManualTriggerInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersManualTriggersPatchSecurity security;
    public DisplayvideoAdvertisersManualTriggersPatchRequest withSecurity(DisplayvideoAdvertisersManualTriggersPatchSecurity security) {
        this.security = security;
        return this;
    }
}