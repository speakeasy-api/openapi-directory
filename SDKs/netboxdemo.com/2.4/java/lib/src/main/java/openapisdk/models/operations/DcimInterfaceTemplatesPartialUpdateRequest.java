package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceTemplatesPartialUpdateRequest {
    public DcimInterfaceTemplatesPartialUpdatePathParams pathParams;
    public DcimInterfaceTemplatesPartialUpdateRequest withPathParams(DcimInterfaceTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceTemplateInput request;
    public DcimInterfaceTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableInterfaceTemplateInput request) {
        this.request = request;
        return this;
    }
}