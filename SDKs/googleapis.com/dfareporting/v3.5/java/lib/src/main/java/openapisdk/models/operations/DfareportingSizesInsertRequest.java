package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSizesInsertRequest {
    public DfareportingSizesInsertPathParams pathParams;
    public DfareportingSizesInsertRequest withPathParams(DfareportingSizesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSizesInsertQueryParams queryParams;
    public DfareportingSizesInsertRequest withQueryParams(DfareportingSizesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Size request;
    public DfareportingSizesInsertRequest withRequest(openapisdk.models.shared.Size request) {
        this.request = request;
        return this;
    }
    public DfareportingSizesInsertSecurity security;
    public DfareportingSizesInsertRequest withSecurity(DfareportingSizesInsertSecurity security) {
        this.security = security;
        return this;
    }
}