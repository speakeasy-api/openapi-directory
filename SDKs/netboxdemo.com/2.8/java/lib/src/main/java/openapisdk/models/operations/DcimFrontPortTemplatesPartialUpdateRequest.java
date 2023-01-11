package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortTemplatesPartialUpdateRequest {
    public DcimFrontPortTemplatesPartialUpdatePathParams pathParams;
    public DcimFrontPortTemplatesPartialUpdateRequest withPathParams(DcimFrontPortTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableFrontPortTemplateInput request;
    public DcimFrontPortTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableFrontPortTemplateInput request) {
        this.request = request;
        return this;
    }
}