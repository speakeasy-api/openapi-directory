package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTemplateRequest {
    public UpdateTemplateQueryParams queryParams;
    public UpdateTemplateRequest withQueryParams(UpdateTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TemplateDefinitionNew request;
    public UpdateTemplateRequest withRequest(openapisdk.models.shared.TemplateDefinitionNew request) {
        this.request = request;
        return this;
    }
}