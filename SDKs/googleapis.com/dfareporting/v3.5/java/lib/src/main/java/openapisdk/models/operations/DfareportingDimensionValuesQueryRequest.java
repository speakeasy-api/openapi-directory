package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDimensionValuesQueryRequest {
    public DfareportingDimensionValuesQueryPathParams pathParams;
    public DfareportingDimensionValuesQueryRequest withPathParams(DfareportingDimensionValuesQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingDimensionValuesQueryQueryParams queryParams;
    public DfareportingDimensionValuesQueryRequest withQueryParams(DfareportingDimensionValuesQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DimensionValueRequest request;
    public DfareportingDimensionValuesQueryRequest withRequest(openapisdk.models.shared.DimensionValueRequest request) {
        this.request = request;
        return this;
    }
    public DfareportingDimensionValuesQuerySecurity security;
    public DfareportingDimensionValuesQueryRequest withSecurity(DfareportingDimensionValuesQuerySecurity security) {
        this.security = security;
        return this;
    }
}