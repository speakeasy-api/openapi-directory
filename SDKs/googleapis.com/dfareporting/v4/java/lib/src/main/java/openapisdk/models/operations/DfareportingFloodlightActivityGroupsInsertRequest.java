package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivityGroupsInsertRequest {
    public DfareportingFloodlightActivityGroupsInsertPathParams pathParams;
    public DfareportingFloodlightActivityGroupsInsertRequest withPathParams(DfareportingFloodlightActivityGroupsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivityGroupsInsertQueryParams queryParams;
    public DfareportingFloodlightActivityGroupsInsertRequest withQueryParams(DfareportingFloodlightActivityGroupsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FloodlightActivityGroup request;
    public DfareportingFloodlightActivityGroupsInsertRequest withRequest(openapisdk.models.shared.FloodlightActivityGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingFloodlightActivityGroupsInsertSecurity security;
    public DfareportingFloodlightActivityGroupsInsertRequest withSecurity(DfareportingFloodlightActivityGroupsInsertSecurity security) {
        this.security = security;
        return this;
    }
}