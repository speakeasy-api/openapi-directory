package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest {
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams pathParams;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest withPathParams(SheetsSpreadsheetsValuesBatchUpdateByDataFilterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams queryParams;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest withQueryParams(SheetsSpreadsheetsValuesBatchUpdateByDataFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateValuesByDataFilterRequest request;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest withRequest(openapisdk.models.shared.BatchUpdateValuesByDataFilterRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity security;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest withSecurity(SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity security) {
        this.security = security;
        return this;
    }
}