package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectiveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DirectiveNew request;
    public CreateDirectiveRequest withRequest(openapisdk.models.shared.DirectiveNew request) {
        this.request = request;
        return this;
    }
}