package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesPatchRequest {
    public DfareportingCreativeFieldValuesPatchPathParams pathParams;
    public DfareportingCreativeFieldValuesPatchRequest withPathParams(DfareportingCreativeFieldValuesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeFieldValuesPatchQueryParams queryParams;
    public DfareportingCreativeFieldValuesPatchRequest withQueryParams(DfareportingCreativeFieldValuesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeFieldValue request;
    public DfareportingCreativeFieldValuesPatchRequest withRequest(openapisdk.models.shared.CreativeFieldValue request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeFieldValuesPatchSecurity security;
    public DfareportingCreativeFieldValuesPatchRequest withSecurity(DfareportingCreativeFieldValuesPatchSecurity security) {
        this.security = security;
        return this;
    }
}