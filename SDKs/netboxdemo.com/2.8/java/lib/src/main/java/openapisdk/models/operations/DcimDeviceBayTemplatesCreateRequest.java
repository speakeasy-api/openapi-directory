package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceBayTemplateInput request;
    public DcimDeviceBayTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableDeviceBayTemplateInput request) {
        this.request = request;
        return this;
    }
}