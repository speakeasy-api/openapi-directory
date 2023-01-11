package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSitesInsertRequest {
    public DfareportingSitesInsertPathParams pathParams;
    public DfareportingSitesInsertRequest withPathParams(DfareportingSitesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSitesInsertQueryParams queryParams;
    public DfareportingSitesInsertRequest withQueryParams(DfareportingSitesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Site request;
    public DfareportingSitesInsertRequest withRequest(openapisdk.models.shared.Site request) {
        this.request = request;
        return this;
    }
    public DfareportingSitesInsertSecurity security;
    public DfareportingSitesInsertRequest withSecurity(DfareportingSitesInsertSecurity security) {
        this.security = security;
        return this;
    }
}