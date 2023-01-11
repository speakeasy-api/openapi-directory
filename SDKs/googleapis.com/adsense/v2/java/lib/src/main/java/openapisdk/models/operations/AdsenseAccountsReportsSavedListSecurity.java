package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsSavedListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsReportsSavedListSecurityOption1 option1;
    public AdsenseAccountsReportsSavedListSecurity withOption1(AdsenseAccountsReportsSavedListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsReportsSavedListSecurityOption2 option2;
    public AdsenseAccountsReportsSavedListSecurity withOption2(AdsenseAccountsReportsSavedListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}