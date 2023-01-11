package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExportConfigurationRequest {
    public String serverURL;
    public UpdateExportConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateExportConfigurationPathParams pathParams;
    public UpdateExportConfigurationRequest withPathParams(UpdateExportConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateExportConfigurationUpdateExportConfigurationRequest request;
    public UpdateExportConfigurationRequest withRequest(UpdateExportConfigurationUpdateExportConfigurationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateExportConfigurationSecurity security;
    public UpdateExportConfigurationRequest withSecurity(UpdateExportConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}