package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingConversionsBatchupdateRequest {
    public DfareportingConversionsBatchupdatePathParams pathParams;
    public DfareportingConversionsBatchupdateRequest withPathParams(DfareportingConversionsBatchupdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingConversionsBatchupdateQueryParams queryParams;
    public DfareportingConversionsBatchupdateRequest withQueryParams(DfareportingConversionsBatchupdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConversionsBatchUpdateRequest request;
    public DfareportingConversionsBatchupdateRequest withRequest(openapisdk.models.shared.ConversionsBatchUpdateRequest request) {
        this.request = request;
        return this;
    }
    public DfareportingConversionsBatchupdateSecurity security;
    public DfareportingConversionsBatchupdateRequest withSecurity(DfareportingConversionsBatchupdateSecurity security) {
        this.security = security;
        return this;
    }
}