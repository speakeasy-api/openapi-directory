package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortTemplatesUpdateRequest {
    public DcimRearPortTemplatesUpdatePathParams pathParams;
    public DcimRearPortTemplatesUpdateRequest withPathParams(DcimRearPortTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRearPortTemplateInput request;
    public DcimRearPortTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableRearPortTemplateInput request) {
        this.request = request;
        return this;
    }
}