package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsBatchUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SheetsSpreadsheetsBatchUpdateSecurityOption1 option1;
    public SheetsSpreadsheetsBatchUpdateSecurity withOption1(SheetsSpreadsheetsBatchUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SheetsSpreadsheetsBatchUpdateSecurityOption2 option2;
    public SheetsSpreadsheetsBatchUpdateSecurity withOption2(SheetsSpreadsheetsBatchUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SheetsSpreadsheetsBatchUpdateSecurityOption3 option3;
    public SheetsSpreadsheetsBatchUpdateSecurity withOption3(SheetsSpreadsheetsBatchUpdateSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}