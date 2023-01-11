package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsInsertSecurityOption1 option1;
    public CalendarEventsInsertSecurity withOption1(CalendarEventsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsInsertSecurityOption2 option2;
    public CalendarEventsInsertSecurity withOption2(CalendarEventsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}