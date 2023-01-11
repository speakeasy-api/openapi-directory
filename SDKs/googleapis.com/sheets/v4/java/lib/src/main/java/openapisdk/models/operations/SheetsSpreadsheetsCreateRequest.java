package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsCreateRequest {
    public SheetsSpreadsheetsCreateQueryParams queryParams;
    public SheetsSpreadsheetsCreateRequest withQueryParams(SheetsSpreadsheetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpreadsheetInput request;
    public SheetsSpreadsheetsCreateRequest withRequest(openapisdk.models.shared.SpreadsheetInput request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsCreateSecurity security;
    public SheetsSpreadsheetsCreateRequest withSecurity(SheetsSpreadsheetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}