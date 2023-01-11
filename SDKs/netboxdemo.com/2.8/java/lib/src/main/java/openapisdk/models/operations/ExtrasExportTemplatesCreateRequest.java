package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableExportTemplateInput request;
    public ExtrasExportTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableExportTemplateInput request) {
        this.request = request;
        return this;
    }
}