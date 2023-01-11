package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasExportTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportTemplateInput request;
    public ExtrasExportTemplatesCreateRequest withRequest(openapisdk.models.shared.ExportTemplateInput request) {
        this.request = request;
        return this;
    }
}