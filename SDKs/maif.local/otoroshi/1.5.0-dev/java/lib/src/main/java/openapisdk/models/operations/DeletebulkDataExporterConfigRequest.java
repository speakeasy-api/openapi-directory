package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletebulkDataExporterConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/ndjson")
    public openapisdk.models.shared.Patch[] request;
    public DeletebulkDataExporterConfigRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public DeletebulkDataExporterConfigSecurity security;
    public DeletebulkDataExporterConfigRequest withSecurity(DeletebulkDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}