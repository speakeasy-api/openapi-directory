package openapisdk.models.operations;



public class SheetsSpreadsheetsDeveloperMetadataGetResponse {
    public String contentType;
    public SheetsSpreadsheetsDeveloperMetadataGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeveloperMetadata developerMetadata;
    public SheetsSpreadsheetsDeveloperMetadataGetResponse withDeveloperMetadata(openapisdk.models.shared.DeveloperMetadata developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsDeveloperMetadataGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}