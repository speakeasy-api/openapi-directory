package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesUpdateRequest {
    public DfareportingCreativeFieldValuesUpdatePathParams pathParams;
    public DfareportingCreativeFieldValuesUpdateRequest withPathParams(DfareportingCreativeFieldValuesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeFieldValuesUpdateQueryParams queryParams;
    public DfareportingCreativeFieldValuesUpdateRequest withQueryParams(DfareportingCreativeFieldValuesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeFieldValue request;
    public DfareportingCreativeFieldValuesUpdateRequest withRequest(openapisdk.models.shared.CreativeFieldValue request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeFieldValuesUpdateSecurity security;
    public DfareportingCreativeFieldValuesUpdateRequest withSecurity(DfareportingCreativeFieldValuesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}