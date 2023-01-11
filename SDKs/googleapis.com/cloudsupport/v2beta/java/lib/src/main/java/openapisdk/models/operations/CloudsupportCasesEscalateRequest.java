package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesEscalateRequest {
    public CloudsupportCasesEscalatePathParams pathParams;
    public CloudsupportCasesEscalateRequest withPathParams(CloudsupportCasesEscalatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportCasesEscalateQueryParams queryParams;
    public CloudsupportCasesEscalateRequest withQueryParams(CloudsupportCasesEscalateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EscalateCaseRequest request;
    public CloudsupportCasesEscalateRequest withRequest(openapisdk.models.shared.EscalateCaseRequest request) {
        this.request = request;
        return this;
    }
    public CloudsupportCasesEscalateSecurity security;
    public CloudsupportCasesEscalateRequest withSecurity(CloudsupportCasesEscalateSecurity security) {
        this.security = security;
        return this;
    }
}