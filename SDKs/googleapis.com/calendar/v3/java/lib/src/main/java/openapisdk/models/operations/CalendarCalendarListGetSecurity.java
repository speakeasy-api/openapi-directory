package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarCalendarListGetSecurityOption1 option1;
    public CalendarCalendarListGetSecurity withOption1(CalendarCalendarListGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarCalendarListGetSecurityOption2 option2;
    public CalendarCalendarListGetSecurity withOption2(CalendarCalendarListGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}