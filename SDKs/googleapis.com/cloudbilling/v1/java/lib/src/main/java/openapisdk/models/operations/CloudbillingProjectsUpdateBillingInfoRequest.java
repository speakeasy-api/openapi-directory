package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingProjectsUpdateBillingInfoRequest {
    public CloudbillingProjectsUpdateBillingInfoPathParams pathParams;
    public CloudbillingProjectsUpdateBillingInfoRequest withPathParams(CloudbillingProjectsUpdateBillingInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingProjectsUpdateBillingInfoQueryParams queryParams;
    public CloudbillingProjectsUpdateBillingInfoRequest withQueryParams(CloudbillingProjectsUpdateBillingInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectBillingInfo request;
    public CloudbillingProjectsUpdateBillingInfoRequest withRequest(openapisdk.models.shared.ProjectBillingInfo request) {
        this.request = request;
        return this;
    }
    public CloudbillingProjectsUpdateBillingInfoSecurity security;
    public CloudbillingProjectsUpdateBillingInfoRequest withSecurity(CloudbillingProjectsUpdateBillingInfoSecurity security) {
        this.security = security;
        return this;
    }
}