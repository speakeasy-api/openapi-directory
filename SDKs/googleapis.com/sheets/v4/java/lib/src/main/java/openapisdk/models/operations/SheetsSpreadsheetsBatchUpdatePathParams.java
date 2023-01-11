package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsBatchUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsBatchUpdatePathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}