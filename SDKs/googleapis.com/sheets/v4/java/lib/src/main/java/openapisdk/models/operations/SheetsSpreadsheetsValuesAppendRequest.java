package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesAppendRequest {
    public SheetsSpreadsheetsValuesAppendPathParams pathParams;
    public SheetsSpreadsheetsValuesAppendRequest withPathParams(SheetsSpreadsheetsValuesAppendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesAppendQueryParams queryParams;
    public SheetsSpreadsheetsValuesAppendRequest withQueryParams(SheetsSpreadsheetsValuesAppendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValueRange request;
    public SheetsSpreadsheetsValuesAppendRequest withRequest(openapisdk.models.shared.ValueRange request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesAppendSecurity security;
    public SheetsSpreadsheetsValuesAppendRequest withSecurity(SheetsSpreadsheetsValuesAppendSecurity security) {
        this.security = security;
        return this;
    }
}