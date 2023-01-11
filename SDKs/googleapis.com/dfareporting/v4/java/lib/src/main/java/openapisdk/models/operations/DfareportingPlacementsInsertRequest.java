package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementsInsertRequest {
    public DfareportingPlacementsInsertPathParams pathParams;
    public DfareportingPlacementsInsertRequest withPathParams(DfareportingPlacementsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementsInsertQueryParams queryParams;
    public DfareportingPlacementsInsertRequest withQueryParams(DfareportingPlacementsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Placement request;
    public DfareportingPlacementsInsertRequest withRequest(openapisdk.models.shared.Placement request) {
        this.request = request;
        return this;
    }
    public DfareportingPlacementsInsertSecurity security;
    public DfareportingPlacementsInsertRequest withSecurity(DfareportingPlacementsInsertSecurity security) {
        this.security = security;
        return this;
    }
}