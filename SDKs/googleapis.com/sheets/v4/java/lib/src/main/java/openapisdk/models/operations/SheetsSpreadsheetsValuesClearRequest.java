package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesClearRequest {
    public SheetsSpreadsheetsValuesClearPathParams pathParams;
    public SheetsSpreadsheetsValuesClearRequest withPathParams(SheetsSpreadsheetsValuesClearPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesClearQueryParams queryParams;
    public SheetsSpreadsheetsValuesClearRequest withQueryParams(SheetsSpreadsheetsValuesClearQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SheetsSpreadsheetsValuesClearRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesClearSecurity security;
    public SheetsSpreadsheetsValuesClearRequest withSecurity(SheetsSpreadsheetsValuesClearSecurity security) {
        this.security = security;
        return this;
    }
}