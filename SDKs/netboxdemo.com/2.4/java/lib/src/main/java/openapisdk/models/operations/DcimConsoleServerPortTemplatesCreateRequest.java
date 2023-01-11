package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsoleServerPortTemplateInput request;
    public DcimConsoleServerPortTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableConsoleServerPortTemplateInput request) {
        this.request = request;
        return this;
    }
}