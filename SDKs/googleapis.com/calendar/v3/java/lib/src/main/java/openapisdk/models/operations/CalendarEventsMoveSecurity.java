package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsMoveSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsMoveSecurityOption1 option1;
    public CalendarEventsMoveSecurity withOption1(CalendarEventsMoveSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsMoveSecurityOption2 option2;
    public CalendarEventsMoveSecurity withOption2(CalendarEventsMoveSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}