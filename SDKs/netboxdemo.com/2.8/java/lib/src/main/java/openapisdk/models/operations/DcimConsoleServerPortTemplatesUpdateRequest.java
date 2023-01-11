package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortTemplatesUpdateRequest {
    public DcimConsoleServerPortTemplatesUpdatePathParams pathParams;
    public DcimConsoleServerPortTemplatesUpdateRequest withPathParams(DcimConsoleServerPortTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsoleServerPortTemplateInput request;
    public DcimConsoleServerPortTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableConsoleServerPortTemplateInput request) {
        this.request = request;
        return this;
    }
}