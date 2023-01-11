package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsSheetsCopyToPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sheetId")
    public Long sheetId;
    public SheetsSpreadsheetsSheetsCopyToPathParams withSheetId(Long sheetId) {
        this.sheetId = sheetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spreadsheetId")
    public String spreadsheetId;
    public SheetsSpreadsheetsSheetsCopyToPathParams withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}