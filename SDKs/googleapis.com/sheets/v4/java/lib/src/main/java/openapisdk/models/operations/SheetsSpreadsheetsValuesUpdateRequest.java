package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesUpdateRequest {
    public SheetsSpreadsheetsValuesUpdatePathParams pathParams;
    public SheetsSpreadsheetsValuesUpdateRequest withPathParams(SheetsSpreadsheetsValuesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsValuesUpdateQueryParams queryParams;
    public SheetsSpreadsheetsValuesUpdateRequest withQueryParams(SheetsSpreadsheetsValuesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValueRange request;
    public SheetsSpreadsheetsValuesUpdateRequest withRequest(openapisdk.models.shared.ValueRange request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsValuesUpdateSecurity security;
    public SheetsSpreadsheetsValuesUpdateRequest withSecurity(SheetsSpreadsheetsValuesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}