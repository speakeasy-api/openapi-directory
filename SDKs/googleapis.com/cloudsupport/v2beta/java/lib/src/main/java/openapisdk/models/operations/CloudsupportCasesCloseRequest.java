package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesCloseRequest {
    public CloudsupportCasesClosePathParams pathParams;
    public CloudsupportCasesCloseRequest withPathParams(CloudsupportCasesClosePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportCasesCloseQueryParams queryParams;
    public CloudsupportCasesCloseRequest withQueryParams(CloudsupportCasesCloseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudsupportCasesCloseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudsupportCasesCloseSecurity security;
    public CloudsupportCasesCloseRequest withSecurity(CloudsupportCasesCloseSecurity security) {
        this.security = security;
        return this;
    }
}