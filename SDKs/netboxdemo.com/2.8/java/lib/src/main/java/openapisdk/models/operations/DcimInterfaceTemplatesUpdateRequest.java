package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceTemplatesUpdateRequest {
    public DcimInterfaceTemplatesUpdatePathParams pathParams;
    public DcimInterfaceTemplatesUpdateRequest withPathParams(DcimInterfaceTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceTemplateInput request;
    public DcimInterfaceTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableInterfaceTemplateInput request) {
        this.request = request;
        return this;
    }
}