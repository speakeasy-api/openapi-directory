package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBulkDataExporterConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/ndjson")
    public openapisdk.models.shared.DataExporterConfig request;
    public UpdateBulkDataExporterConfigRequest withRequest(openapisdk.models.shared.DataExporterConfig request) {
        this.request = request;
        return this;
    }
    public UpdateBulkDataExporterConfigSecurity security;
    public UpdateBulkDataExporterConfigRequest withSecurity(UpdateBulkDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}