package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsBatchUpdateRequest {
    public SheetsSpreadsheetsBatchUpdatePathParams pathParams;
    public SheetsSpreadsheetsBatchUpdateRequest withPathParams(SheetsSpreadsheetsBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsBatchUpdateQueryParams queryParams;
    public SheetsSpreadsheetsBatchUpdateRequest withQueryParams(SheetsSpreadsheetsBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateSpreadsheetRequest request;
    public SheetsSpreadsheetsBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateSpreadsheetRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsBatchUpdateSecurity security;
    public SheetsSpreadsheetsBatchUpdateRequest withSecurity(SheetsSpreadsheetsBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}