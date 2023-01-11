package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortTemplatesPartialUpdateRequest {
    public DcimConsolePortTemplatesPartialUpdatePathParams pathParams;
    public DcimConsolePortTemplatesPartialUpdateRequest withPathParams(DcimConsolePortTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsolePortTemplateInput request;
    public DcimConsolePortTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableConsolePortTemplateInput request) {
        this.request = request;
        return this;
    }
}