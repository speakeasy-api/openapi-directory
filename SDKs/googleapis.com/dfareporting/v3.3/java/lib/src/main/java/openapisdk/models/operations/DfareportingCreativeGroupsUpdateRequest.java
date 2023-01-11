package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeGroupsUpdateRequest {
    public DfareportingCreativeGroupsUpdatePathParams pathParams;
    public DfareportingCreativeGroupsUpdateRequest withPathParams(DfareportingCreativeGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeGroupsUpdateQueryParams queryParams;
    public DfareportingCreativeGroupsUpdateRequest withQueryParams(DfareportingCreativeGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeGroup request;
    public DfareportingCreativeGroupsUpdateRequest withRequest(openapisdk.models.shared.CreativeGroup request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeGroupsUpdateSecurity security;
    public DfareportingCreativeGroupsUpdateRequest withSecurity(DfareportingCreativeGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}