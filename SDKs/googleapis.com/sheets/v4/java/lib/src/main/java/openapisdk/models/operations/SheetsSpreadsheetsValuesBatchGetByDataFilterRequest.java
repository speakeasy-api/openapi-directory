package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchGetByDataFilterRequest {
    public SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams pathParams;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterRequest withPathParams(SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams queryParams;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterRequest withQueryParams(SheetsSpreadsheetsValuesBatchGetByDataFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetValuesByDataFilterRequest request;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterRequest withRequest(openapisdk.models.shared.BatchGetValuesByDataFilterRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity security;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterRequest withSecurity(SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity security) {
        this.security = security;
        return this;
    }
}