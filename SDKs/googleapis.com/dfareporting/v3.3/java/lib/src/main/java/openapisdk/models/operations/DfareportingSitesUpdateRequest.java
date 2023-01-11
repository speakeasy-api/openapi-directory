package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSitesUpdateRequest {
    public DfareportingSitesUpdatePathParams pathParams;
    public DfareportingSitesUpdateRequest withPathParams(DfareportingSitesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSitesUpdateQueryParams queryParams;
    public DfareportingSitesUpdateRequest withQueryParams(DfareportingSitesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Site request;
    public DfareportingSitesUpdateRequest withRequest(openapisdk.models.shared.Site request) {
        this.request = request;
        return this;
    }
    public DfareportingSitesUpdateSecurity security;
    public DfareportingSitesUpdateRequest withSecurity(DfareportingSitesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}