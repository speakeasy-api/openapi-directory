package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsValuesBatchClearPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}