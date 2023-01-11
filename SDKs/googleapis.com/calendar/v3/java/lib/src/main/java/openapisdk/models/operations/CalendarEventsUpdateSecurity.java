package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsUpdateSecurityOption1 option1;
    public CalendarEventsUpdateSecurity withOption1(CalendarEventsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsUpdateSecurityOption2 option2;
    public CalendarEventsUpdateSecurity withOption2(CalendarEventsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}