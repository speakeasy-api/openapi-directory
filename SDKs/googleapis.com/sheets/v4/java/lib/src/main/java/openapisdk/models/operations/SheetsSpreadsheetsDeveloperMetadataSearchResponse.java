package openapisdk.models.operations;



public class SheetsSpreadsheetsDeveloperMetadataSearchResponse {
    public String contentType;
    public SheetsSpreadsheetsDeveloperMetadataSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchDeveloperMetadataResponse searchDeveloperMetadataResponse;
    public SheetsSpreadsheetsDeveloperMetadataSearchResponse withSearchDeveloperMetadataResponse(openapisdk.models.shared.SearchDeveloperMetadataResponse searchDeveloperMetadataResponse) {
        this.searchDeveloperMetadataResponse = searchDeveloperMetadataResponse;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsDeveloperMetadataSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}