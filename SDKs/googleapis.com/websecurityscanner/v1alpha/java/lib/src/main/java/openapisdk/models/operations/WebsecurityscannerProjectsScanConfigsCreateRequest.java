package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsCreateRequest {
    public WebsecurityscannerProjectsScanConfigsCreatePathParams pathParams;
    public WebsecurityscannerProjectsScanConfigsCreateRequest withPathParams(WebsecurityscannerProjectsScanConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsCreateQueryParams queryParams;
    public WebsecurityscannerProjectsScanConfigsCreateRequest withQueryParams(WebsecurityscannerProjectsScanConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScanConfig request;
    public WebsecurityscannerProjectsScanConfigsCreateRequest withRequest(openapisdk.models.shared.ScanConfig request) {
        this.request = request;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsCreateSecurity security;
    public WebsecurityscannerProjectsScanConfigsCreateRequest withSecurity(WebsecurityscannerProjectsScanConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}