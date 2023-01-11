package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesInsertRequest {
    public DfareportingCreativeFieldValuesInsertPathParams pathParams;
    public DfareportingCreativeFieldValuesInsertRequest withPathParams(DfareportingCreativeFieldValuesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeFieldValuesInsertQueryParams queryParams;
    public DfareportingCreativeFieldValuesInsertRequest withQueryParams(DfareportingCreativeFieldValuesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeFieldValue request;
    public DfareportingCreativeFieldValuesInsertRequest withRequest(openapisdk.models.shared.CreativeFieldValue request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeFieldValuesInsertSecurity security;
    public DfareportingCreativeFieldValuesInsertRequest withSecurity(DfareportingCreativeFieldValuesInsertSecurity security) {
        this.security = security;
        return this;
    }
}