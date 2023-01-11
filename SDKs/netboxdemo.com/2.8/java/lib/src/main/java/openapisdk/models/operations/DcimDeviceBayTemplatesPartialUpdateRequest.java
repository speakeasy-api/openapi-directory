package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesPartialUpdateRequest {
    public DcimDeviceBayTemplatesPartialUpdatePathParams pathParams;
    public DcimDeviceBayTemplatesPartialUpdateRequest withPathParams(DcimDeviceBayTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceBayTemplateInput request;
    public DcimDeviceBayTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceBayTemplateInput request) {
        this.request = request;
        return this;
    }
}