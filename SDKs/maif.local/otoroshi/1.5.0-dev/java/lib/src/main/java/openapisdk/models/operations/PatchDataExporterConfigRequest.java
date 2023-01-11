package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDataExporterConfigRequest {
    public PatchDataExporterConfigPathParams pathParams;
    public PatchDataExporterConfigRequest withPathParams(PatchDataExporterConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchDataExporterConfigRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchDataExporterConfigSecurity security;
    public PatchDataExporterConfigRequest withSecurity(PatchDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}