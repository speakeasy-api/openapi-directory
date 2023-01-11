package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTemplateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TemplateDefinitionNew request;
    public CreateTemplateRequest withRequest(openapisdk.models.shared.TemplateDefinitionNew request) {
        this.request = request;
        return this;
    }
}