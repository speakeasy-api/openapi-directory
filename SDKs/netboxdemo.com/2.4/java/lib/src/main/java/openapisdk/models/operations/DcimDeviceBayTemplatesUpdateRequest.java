package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesUpdateRequest {
    public DcimDeviceBayTemplatesUpdatePathParams pathParams;
    public DcimDeviceBayTemplatesUpdateRequest withPathParams(DcimDeviceBayTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceBayTemplateInput request;
    public DcimDeviceBayTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceBayTemplateInput request) {
        this.request = request;
        return this;
    }
}