package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExportCustomJobRequest {
    public String serverURL;
    public CreateExportCustomJobRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateExportCustomJobPathParams pathParams;
    public CreateExportCustomJobRequest withPathParams(CreateExportCustomJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateExportCustomJobCreateExportCustomJobRequest request;
    public CreateExportCustomJobRequest withRequest(CreateExportCustomJobCreateExportCustomJobRequest request) {
        this.request = request;
        return this;
    }
    public CreateExportCustomJobSecurity security;
    public CreateExportCustomJobRequest withSecurity(CreateExportCustomJobSecurity security) {
        this.security = security;
        return this;
    }
}