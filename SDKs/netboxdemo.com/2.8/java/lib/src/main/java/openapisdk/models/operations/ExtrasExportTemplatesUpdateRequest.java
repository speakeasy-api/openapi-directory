package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesUpdateRequest {
    public ExtrasExportTemplatesUpdatePathParams pathParams;
    public ExtrasExportTemplatesUpdateRequest withPathParams(ExtrasExportTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableExportTemplateInput request;
    public ExtrasExportTemplatesUpdateRequest withRequest(openapisdk.models.shared.WritableExportTemplateInput request) {
        this.request = request;
        return this;
    }
}