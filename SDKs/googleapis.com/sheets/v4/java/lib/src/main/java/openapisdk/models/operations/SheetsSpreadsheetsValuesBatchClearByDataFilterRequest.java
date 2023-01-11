package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchClearByDataFilterRequest {
    public SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams pathParams;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterRequest withPathParams(SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams queryParams;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterRequest withQueryParams(SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchClearValuesByDataFilterRequest request;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterRequest withRequest(openapisdk.models.shared.BatchClearValuesByDataFilterRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity security;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterRequest withSecurity(SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity security) {
        this.security = security;
        return this;
    }
}