package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativesInsertRequest {
    public DfareportingCreativesInsertPathParams pathParams;
    public DfareportingCreativesInsertRequest withPathParams(DfareportingCreativesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativesInsertQueryParams queryParams;
    public DfareportingCreativesInsertRequest withQueryParams(DfareportingCreativesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Creative request;
    public DfareportingCreativesInsertRequest withRequest(openapisdk.models.shared.Creative request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativesInsertSecurity security;
    public DfareportingCreativesInsertRequest withSecurity(DfareportingCreativesInsertSecurity security) {
        this.security = security;
        return this;
    }
}