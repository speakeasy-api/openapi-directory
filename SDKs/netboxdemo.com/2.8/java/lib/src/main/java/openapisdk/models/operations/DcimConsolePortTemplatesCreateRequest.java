package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsolePortTemplateInput request;
    public DcimConsolePortTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableConsolePortTemplateInput request) {
        this.request = request;
        return this;
    }
}