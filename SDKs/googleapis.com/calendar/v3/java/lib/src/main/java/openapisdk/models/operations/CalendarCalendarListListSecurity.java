package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarCalendarListListSecurityOption1 option1;
    public CalendarCalendarListListSecurity withOption1(CalendarCalendarListListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarCalendarListListSecurityOption2 option2;
    public CalendarCalendarListListSecurity withOption2(CalendarCalendarListListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}