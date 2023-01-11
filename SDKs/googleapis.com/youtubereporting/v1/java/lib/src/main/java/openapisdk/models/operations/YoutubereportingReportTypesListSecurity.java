package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingReportTypesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingReportTypesListSecurityOption1 option1;
    public YoutubereportingReportTypesListSecurity withOption1(YoutubereportingReportTypesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingReportTypesListSecurityOption2 option2;
    public YoutubereportingReportTypesListSecurity withOption2(YoutubereportingReportTypesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}