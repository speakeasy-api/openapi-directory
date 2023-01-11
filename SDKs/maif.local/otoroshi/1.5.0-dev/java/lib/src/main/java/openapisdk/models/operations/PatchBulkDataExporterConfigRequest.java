package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBulkDataExporterConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/ndjson")
    public openapisdk.models.shared.Patch[] request;
    public PatchBulkDataExporterConfigRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchBulkDataExporterConfigSecurity security;
    public PatchBulkDataExporterConfigRequest withSecurity(PatchBulkDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}