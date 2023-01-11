package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortTemplatesUpdateRequest {
    public DcimFrontPortTemplatesUpdatePathParams pathParams;
    public DcimFrontPortTemplatesUpdateRequest withPathParams(DcimFrontPortTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableFrontPortTemplateInput request;
    public DcimFrontPortTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableFrontPortTemplateInput request) {
        this.request = request;
        return this;
    }
}