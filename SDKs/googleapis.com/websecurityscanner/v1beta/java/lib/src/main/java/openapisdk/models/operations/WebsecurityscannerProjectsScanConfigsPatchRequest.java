package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsPatchRequest {
    public WebsecurityscannerProjectsScanConfigsPatchPathParams pathParams;
    public WebsecurityscannerProjectsScanConfigsPatchRequest withPathParams(WebsecurityscannerProjectsScanConfigsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsPatchQueryParams queryParams;
    public WebsecurityscannerProjectsScanConfigsPatchRequest withQueryParams(WebsecurityscannerProjectsScanConfigsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScanConfig request;
    public WebsecurityscannerProjectsScanConfigsPatchRequest withRequest(openapisdk.models.shared.ScanConfig request) {
        this.request = request;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsPatchSecurity security;
    public WebsecurityscannerProjectsScanConfigsPatchRequest withSecurity(WebsecurityscannerProjectsScanConfigsPatchSecurity security) {
        this.security = security;
        return this;
    }
}