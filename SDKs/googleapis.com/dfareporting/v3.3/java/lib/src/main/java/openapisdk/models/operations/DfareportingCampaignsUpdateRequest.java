package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsUpdateRequest {
    public DfareportingCampaignsUpdatePathParams pathParams;
    public DfareportingCampaignsUpdateRequest withPathParams(DfareportingCampaignsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCampaignsUpdateQueryParams queryParams;
    public DfareportingCampaignsUpdateRequest withQueryParams(DfareportingCampaignsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Campaign request;
    public DfareportingCampaignsUpdateRequest withRequest(openapisdk.models.shared.Campaign request) {
        this.request = request;
        return this;
    }
    public DfareportingCampaignsUpdateSecurity security;
    public DfareportingCampaignsUpdateRequest withSecurity(DfareportingCampaignsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}