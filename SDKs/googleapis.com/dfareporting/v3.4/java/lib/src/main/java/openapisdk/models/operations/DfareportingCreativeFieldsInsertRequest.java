package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldsInsertRequest {
    public DfareportingCreativeFieldsInsertPathParams pathParams;
    public DfareportingCreativeFieldsInsertRequest withPathParams(DfareportingCreativeFieldsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeFieldsInsertQueryParams queryParams;
    public DfareportingCreativeFieldsInsertRequest withQueryParams(DfareportingCreativeFieldsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeField request;
    public DfareportingCreativeFieldsInsertRequest withRequest(openapisdk.models.shared.CreativeField request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeFieldsInsertSecurity security;
    public DfareportingCreativeFieldsInsertRequest withSecurity(DfareportingCreativeFieldsInsertSecurity security) {
        this.security = security;
        return this;
    }
}