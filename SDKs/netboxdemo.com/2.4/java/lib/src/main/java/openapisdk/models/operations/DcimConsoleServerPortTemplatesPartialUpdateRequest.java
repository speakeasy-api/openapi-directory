package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortTemplatesPartialUpdateRequest {
    public DcimConsoleServerPortTemplatesPartialUpdatePathParams pathParams;
    public DcimConsoleServerPortTemplatesPartialUpdateRequest withPathParams(DcimConsoleServerPortTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsoleServerPortTemplateInput request;
    public DcimConsoleServerPortTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableConsoleServerPortTemplateInput request) {
        this.request = request;
        return this;
    }
}