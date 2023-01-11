package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarCalendarsGetSecurityOption1 option1;
    public CalendarCalendarsGetSecurity withOption1(CalendarCalendarsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarCalendarsGetSecurityOption2 option2;
    public CalendarCalendarsGetSecurity withOption2(CalendarCalendarsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}