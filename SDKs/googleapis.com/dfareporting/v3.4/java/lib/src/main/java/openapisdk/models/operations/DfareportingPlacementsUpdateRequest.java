package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementsUpdateRequest {
    public DfareportingPlacementsUpdatePathParams pathParams;
    public DfareportingPlacementsUpdateRequest withPathParams(DfareportingPlacementsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementsUpdateQueryParams queryParams;
    public DfareportingPlacementsUpdateRequest withQueryParams(DfareportingPlacementsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Placement request;
    public DfareportingPlacementsUpdateRequest withRequest(openapisdk.models.shared.Placement request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementsUpdateSecurity security;
    public DfareportingPlacementsUpdateRequest withSecurity(DfareportingPlacementsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}