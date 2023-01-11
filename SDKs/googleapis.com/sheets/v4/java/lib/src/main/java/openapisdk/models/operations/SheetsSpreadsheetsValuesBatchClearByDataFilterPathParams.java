package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}