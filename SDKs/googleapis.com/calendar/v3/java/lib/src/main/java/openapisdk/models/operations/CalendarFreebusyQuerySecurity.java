package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarFreebusyQuerySecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarFreebusyQuerySecurityOption1 option1;
    public CalendarFreebusyQuerySecurity withOption1(CalendarFreebusyQuerySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarFreebusyQuerySecurityOption2 option2;
    public CalendarFreebusyQuerySecurity withOption2(CalendarFreebusyQuerySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}