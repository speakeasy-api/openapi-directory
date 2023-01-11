package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldsUpdateRequest {
    public DfareportingCreativeFieldsUpdatePathParams pathParams;
    public DfareportingCreativeFieldsUpdateRequest withPathParams(DfareportingCreativeFieldsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeFieldsUpdateQueryParams queryParams;
    public DfareportingCreativeFieldsUpdateRequest withQueryParams(DfareportingCreativeFieldsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeField request;
    public DfareportingCreativeFieldsUpdateRequest withRequest(openapisdk.models.shared.CreativeField request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeFieldsUpdateSecurity security;
    public DfareportingCreativeFieldsUpdateRequest withSecurity(DfareportingCreativeFieldsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}