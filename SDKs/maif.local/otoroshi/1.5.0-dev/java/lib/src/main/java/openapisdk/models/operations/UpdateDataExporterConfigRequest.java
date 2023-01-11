package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataExporterConfigRequest {
    public UpdateDataExporterConfigPathParams pathParams;
    public UpdateDataExporterConfigRequest withPathParams(UpdateDataExporterConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DataExporterConfig request;
    public UpdateDataExporterConfigRequest withRequest(openapisdk.models.shared.DataExporterConfig request) {
        this.request = request;
        return this;
    }
    public UpdateDataExporterConfigSecurity security;
    public UpdateDataExporterConfigRequest withSecurity(UpdateDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}