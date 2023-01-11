package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortTemplatesUpdateRequest {
    public DcimConsolePortTemplatesUpdatePathParams pathParams;
    public DcimConsolePortTemplatesUpdateRequest withPathParams(DcimConsolePortTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsolePortTemplateInput request;
    public DcimConsolePortTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableConsolePortTemplateInput request) {
        this.request = request;
        return this;
    }
}