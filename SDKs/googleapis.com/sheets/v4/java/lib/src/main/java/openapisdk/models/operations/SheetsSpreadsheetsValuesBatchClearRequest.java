package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchClearRequest {
    public SheetsSpreadsheetsValuesBatchClearPathParams pathParams;
    public SheetsSpreadsheetsValuesBatchClearRequest withPathParams(SheetsSpreadsheetsValuesBatchClearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchClearQueryParams queryParams;
    public SheetsSpreadsheetsValuesBatchClearRequest withQueryParams(SheetsSpreadsheetsValuesBatchClearQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchClearValuesRequest request;
    public SheetsSpreadsheetsValuesBatchClearRequest withRequest(openapisdk.models.shared.BatchClearValuesRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchClearSecurity security;
    public SheetsSpreadsheetsValuesBatchClearRequest withSecurity(SheetsSpreadsheetsValuesBatchClearSecurity security) {
        this.security = security;
        return this;
    }
}