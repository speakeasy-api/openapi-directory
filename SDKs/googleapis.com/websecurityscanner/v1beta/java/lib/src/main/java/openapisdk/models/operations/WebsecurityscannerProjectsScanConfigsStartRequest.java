package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsStartRequest {
    public WebsecurityscannerProjectsScanConfigsStartPathParams pathParams;
    public WebsecurityscannerProjectsScanConfigsStartRequest withPathParams(WebsecurityscannerProjectsScanConfigsStartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsStartQueryParams queryParams;
    public WebsecurityscannerProjectsScanConfigsStartRequest withQueryParams(WebsecurityscannerProjectsScanConfigsStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public WebsecurityscannerProjectsScanConfigsStartRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsStartSecurity security;
    public WebsecurityscannerProjectsScanConfigsStartRequest withSecurity(WebsecurityscannerProjectsScanConfigsStartSecurity security) {
        this.security = security;
        return this;
    }
}