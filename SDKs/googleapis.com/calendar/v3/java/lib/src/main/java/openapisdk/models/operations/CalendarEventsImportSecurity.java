package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsImportSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsImportSecurityOption1 option1;
    public CalendarEventsImportSecurity withOption1(CalendarEventsImportSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarEventsImportSecurityOption2 option2;
    public CalendarEventsImportSecurity withOption2(CalendarEventsImportSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}