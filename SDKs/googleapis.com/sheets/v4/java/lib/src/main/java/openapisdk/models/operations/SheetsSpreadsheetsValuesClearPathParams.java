package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=range")
    public String range;
    public SheetsSpreadsheetsValuesClearPathParams withRange(String range) {
        this.range = range;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsValuesClearPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}