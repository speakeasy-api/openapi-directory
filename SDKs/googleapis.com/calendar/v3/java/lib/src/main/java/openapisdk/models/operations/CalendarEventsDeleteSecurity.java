package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsDeleteSecurityOption1 option1;
    public CalendarEventsDeleteSecurity withOption1(CalendarEventsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsDeleteSecurityOption2 option2;
    public CalendarEventsDeleteSecurity withOption2(CalendarEventsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}