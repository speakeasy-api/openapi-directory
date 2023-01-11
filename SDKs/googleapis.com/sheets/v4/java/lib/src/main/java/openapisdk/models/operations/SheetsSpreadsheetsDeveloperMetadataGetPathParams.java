package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsDeveloperMetadataGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metadataId")
    public Long metadataId;
    public SheetsSpreadsheetsDeveloperMetadataGetPathParams withMetadataId(Long metadataId) {
        this.metadataId = metadataId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsDeveloperMetadataGetPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}