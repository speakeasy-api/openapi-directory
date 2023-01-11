package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsGetByDataFilterRequest {
    public SheetsSpreadsheetsGetByDataFilterPathParams pathParams;
    public SheetsSpreadsheetsGetByDataFilterRequest withPathParams(SheetsSpreadsheetsGetByDataFilterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsGetByDataFilterQueryParams queryParams;
    public SheetsSpreadsheetsGetByDataFilterRequest withQueryParams(SheetsSpreadsheetsGetByDataFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSpreadsheetByDataFilterRequest request;
    public SheetsSpreadsheetsGetByDataFilterRequest withRequest(openapisdk.models.shared.GetSpreadsheetByDataFilterRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsGetByDataFilterSecurity security;
    public SheetsSpreadsheetsGetByDataFilterRequest withSecurity(SheetsSpreadsheetsGetByDataFilterSecurity security) {
        this.security = security;
        return this;
    }
}