package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsPatchRequest {
    public DfareportingCampaignsPatchPathParams pathParams;
    public DfareportingCampaignsPatchRequest withPathParams(DfareportingCampaignsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCampaignsPatchQueryParams queryParams;
    public DfareportingCampaignsPatchRequest withQueryParams(DfareportingCampaignsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Campaign request;
    public DfareportingCampaignsPatchRequest withRequest(openapisdk.models.shared.Campaign request) {
        this.request = request;
        return this;
    }
    public DfareportingCampaignsPatchSecurity security;
    public DfareportingCampaignsPatchRequest withSecurity(DfareportingCampaignsPatchSecurity security) {
        this.security = security;
        return this;
    }
}