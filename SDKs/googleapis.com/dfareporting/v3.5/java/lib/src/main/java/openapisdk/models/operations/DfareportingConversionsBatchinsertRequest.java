package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingConversionsBatchinsertRequest {
    public DfareportingConversionsBatchinsertPathParams pathParams;
    public DfareportingConversionsBatchinsertRequest withPathParams(DfareportingConversionsBatchinsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingConversionsBatchinsertQueryParams queryParams;
    public DfareportingConversionsBatchinsertRequest withQueryParams(DfareportingConversionsBatchinsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConversionsBatchInsertRequest request;
    public DfareportingConversionsBatchinsertRequest withRequest(openapisdk.models.shared.ConversionsBatchInsertRequest request) {
        this.request = request;
        return this;
    }
    public DfareportingConversionsBatchinsertSecurity security;
    public DfareportingConversionsBatchinsertRequest withSecurity(DfareportingConversionsBatchinsertSecurity security) {
        this.security = security;
        return this;
    }
}