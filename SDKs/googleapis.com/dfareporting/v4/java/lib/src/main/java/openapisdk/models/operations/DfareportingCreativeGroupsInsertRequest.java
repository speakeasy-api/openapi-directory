package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeGroupsInsertRequest {
    public DfareportingCreativeGroupsInsertPathParams pathParams;
    public DfareportingCreativeGroupsInsertRequest withPathParams(DfareportingCreativeGroupsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeGroupsInsertQueryParams queryParams;
    public DfareportingCreativeGroupsInsertRequest withQueryParams(DfareportingCreativeGroupsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeGroup request;
    public DfareportingCreativeGroupsInsertRequest withRequest(openapisdk.models.shared.CreativeGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeGroupsInsertSecurity security;
    public DfareportingCreativeGroupsInsertRequest withSecurity(DfareportingCreativeGroupsInsertSecurity security) {
        this.security = security;
        return this;
    }
}