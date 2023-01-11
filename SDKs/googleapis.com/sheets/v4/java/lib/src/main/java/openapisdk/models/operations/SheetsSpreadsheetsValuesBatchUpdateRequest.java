package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchUpdateRequest {
    public SheetsSpreadsheetsValuesBatchUpdatePathParams pathParams;
    public SheetsSpreadsheetsValuesBatchUpdateRequest withPathParams(SheetsSpreadsheetsValuesBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchUpdateQueryParams queryParams;
    public SheetsSpreadsheetsValuesBatchUpdateRequest withQueryParams(SheetsSpreadsheetsValuesBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateValuesRequest request;
    public SheetsSpreadsheetsValuesBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateValuesRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchUpdateSecurity security;
    public SheetsSpreadsheetsValuesBatchUpdateRequest withSecurity(SheetsSpreadsheetsValuesBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}