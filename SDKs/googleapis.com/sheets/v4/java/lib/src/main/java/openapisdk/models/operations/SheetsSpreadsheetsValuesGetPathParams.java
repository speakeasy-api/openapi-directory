package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=range")
    public String range;
    public SheetsSpreadsheetsValuesGetPathParams withRange(String range) {
        this.range = range;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsValuesGetPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}