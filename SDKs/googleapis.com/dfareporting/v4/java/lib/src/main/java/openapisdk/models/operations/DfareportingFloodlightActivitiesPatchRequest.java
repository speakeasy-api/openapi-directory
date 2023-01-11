package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesPatchRequest {
    public DfareportingFloodlightActivitiesPatchPathParams pathParams;
    public DfareportingFloodlightActivitiesPatchRequest withPathParams(DfareportingFloodlightActivitiesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivitiesPatchQueryParams queryParams;
    public DfareportingFloodlightActivitiesPatchRequest withQueryParams(DfareportingFloodlightActivitiesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightActivity request;
    public DfareportingFloodlightActivitiesPatchRequest withRequest(openapisdk.models.shared.FloodlightActivity request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightActivitiesPatchSecurity security;
    public DfareportingFloodlightActivitiesPatchRequest withSecurity(DfareportingFloodlightActivitiesPatchSecurity security) {
        this.security = security;
        return this;
    }
}