package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsDeveloperMetadataSearchRequest {
    public SheetsSpreadsheetsDeveloperMetadataSearchPathParams pathParams;
    public SheetsSpreadsheetsDeveloperMetadataSearchRequest withPathParams(SheetsSpreadsheetsDeveloperMetadataSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsDeveloperMetadataSearchQueryParams queryParams;
    public SheetsSpreadsheetsDeveloperMetadataSearchRequest withQueryParams(SheetsSpreadsheetsDeveloperMetadataSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchDeveloperMetadataRequest request;
    public SheetsSpreadsheetsDeveloperMetadataSearchRequest withRequest(openapisdk.models.shared.SearchDeveloperMetadataRequest request) {
        this.request = request;
        return this;
    }
    public SheetsSpreadsheetsDeveloperMetadataSearchSecurity security;
    public SheetsSpreadsheetsDeveloperMetadataSearchRequest withSecurity(SheetsSpreadsheetsDeveloperMetadataSearchSecurity security) {
        this.security = security;
        return this;
    }
}