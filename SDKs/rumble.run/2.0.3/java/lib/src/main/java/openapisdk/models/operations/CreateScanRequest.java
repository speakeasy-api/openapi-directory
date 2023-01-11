package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScanRequest {
    public CreateScanPathParams pathParams;
    public CreateScanRequest withPathParams(CreateScanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ScanOptions request;
    public CreateScanRequest withRequest(openapisdk.models.shared.ScanOptions request) {
        this.request = request;
        return this;
    }
    public CreateScanSecurity security;
    public CreateScanRequest withSecurity(CreateScanSecurity security) {
        this.security = security;
        return this;
    }
}