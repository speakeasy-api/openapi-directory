package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsQuickAddSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsQuickAddSecurityOption1 option1;
    public CalendarEventsQuickAddSecurity withOption1(CalendarEventsQuickAddSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsQuickAddSecurityOption2 option2;
    public CalendarEventsQuickAddSecurity withOption2(CalendarEventsQuickAddSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}