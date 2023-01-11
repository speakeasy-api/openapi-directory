package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsSheetsCopyToRequest {
    public SheetsSpreadsheetsSheetsCopyToPathParams pathParams;
    public SheetsSpreadsheetsSheetsCopyToRequest withPathParams(SheetsSpreadsheetsSheetsCopyToPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsSheetsCopyToQueryParams queryParams;
    public SheetsSpreadsheetsSheetsCopyToRequest withQueryParams(SheetsSpreadsheetsSheetsCopyToQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopySheetToAnotherSpreadsheetRequest request;
    public SheetsSpreadsheetsSheetsCopyToRequest withRequest(openapisdk.models.shared.CopySheetToAnotherSpreadsheetRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsSheetsCopyToSecurity security;
    public SheetsSpreadsheetsSheetsCopyToRequest withSecurity(SheetsSpreadsheetsSheetsCopyToSecurity security) {
        this.security = security;
        return this;
    }
}