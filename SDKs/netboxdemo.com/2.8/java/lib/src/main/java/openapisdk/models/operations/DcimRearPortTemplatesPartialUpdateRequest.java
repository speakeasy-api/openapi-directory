package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortTemplatesPartialUpdateRequest {
    public DcimRearPortTemplatesPartialUpdatePathParams pathParams;
    public DcimRearPortTemplatesPartialUpdateRequest withPathParams(DcimRearPortTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRearPortTemplateInput request;
    public DcimRearPortTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableRearPortTemplateInput request) {
        this.request = request;
        return this;
    }
}