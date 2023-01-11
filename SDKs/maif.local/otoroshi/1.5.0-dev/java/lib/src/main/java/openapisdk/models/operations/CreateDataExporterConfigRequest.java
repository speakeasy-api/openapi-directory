package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataExporterConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DataExporterConfig request;
    public CreateDataExporterConfigRequest withRequest(openapisdk.models.shared.DataExporterConfig request) {
        this.request = request;
        return this;
    }
    public CreateDataExporterConfigSecurity security;
    public CreateDataExporterConfigRequest withSecurity(CreateDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}