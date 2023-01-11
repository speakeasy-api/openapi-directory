package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsInsertRequest {
    public DfareportingCampaignsInsertPathParams pathParams;
    public DfareportingCampaignsInsertRequest withPathParams(DfareportingCampaignsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCampaignsInsertQueryParams queryParams;
    public DfareportingCampaignsInsertRequest withQueryParams(DfareportingCampaignsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Campaign request;
    public DfareportingCampaignsInsertRequest withRequest(openapisdk.models.shared.Campaign request) {
        this.request = request;
        return this;
    }
    public DfareportingCampaignsInsertSecurity security;
    public DfareportingCampaignsInsertRequest withSecurity(DfareportingCampaignsInsertSecurity security) {
        this.security = security;
        return this;
    }
}