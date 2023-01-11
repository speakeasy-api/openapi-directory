package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesUpdateRequest {
    public DfareportingFloodlightActivitiesUpdatePathParams pathParams;
    public DfareportingFloodlightActivitiesUpdateRequest withPathParams(DfareportingFloodlightActivitiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivitiesUpdateQueryParams queryParams;
    public DfareportingFloodlightActivitiesUpdateRequest withQueryParams(DfareportingFloodlightActivitiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightActivity request;
    public DfareportingFloodlightActivitiesUpdateRequest withRequest(openapisdk.models.shared.FloodlightActivity request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightActivitiesUpdateSecurity security;
    public DfareportingFloodlightActivitiesUpdateRequest withSecurity(DfareportingFloodlightActivitiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}