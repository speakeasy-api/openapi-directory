package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsPatchSecurityOption1 option1;
    public CalendarEventsPatchSecurity withOption1(CalendarEventsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsPatchSecurityOption2 option2;
    public CalendarEventsPatchSecurity withOption2(CalendarEventsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}