package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesPartialUpdateRequest {
    public ExtrasExportTemplatesPartialUpdatePathParams pathParams;
    public ExtrasExportTemplatesPartialUpdateRequest withPathParams(ExtrasExportTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableExportTemplateInput request;
    public ExtrasExportTemplatesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableExportTemplateInput request) {
        this.request = request;
        return this;
    }
}