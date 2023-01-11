package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRearPortTemplateInput request;
    public DcimRearPortTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableRearPortTemplateInput request) {
        this.request = request;
        return this;
    }
}