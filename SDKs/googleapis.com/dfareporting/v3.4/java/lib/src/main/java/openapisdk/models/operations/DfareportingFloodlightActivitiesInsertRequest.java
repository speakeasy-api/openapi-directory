package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesInsertRequest {
    public DfareportingFloodlightActivitiesInsertPathParams pathParams;
    public DfareportingFloodlightActivitiesInsertRequest withPathParams(DfareportingFloodlightActivitiesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivitiesInsertQueryParams queryParams;
    public DfareportingFloodlightActivitiesInsertRequest withQueryParams(DfareportingFloodlightActivitiesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightActivity request;
    public DfareportingFloodlightActivitiesInsertRequest withRequest(openapisdk.models.shared.FloodlightActivity request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightActivitiesInsertSecurity security;
    public DfareportingFloodlightActivitiesInsertRequest withSecurity(DfareportingFloodlightActivitiesInsertSecurity security) {
        this.security = security;
        return this;
    }
}