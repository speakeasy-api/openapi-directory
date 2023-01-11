package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}