package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarSettingsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarSettingsListSecurityOption1 option1;
    public CalendarSettingsListSecurity withOption1(CalendarSettingsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarSettingsListSecurityOption2 option2;
    public CalendarSettingsListSecurity withOption2(CalendarSettingsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarSettingsListSecurityOption3 option3;
    public CalendarSettingsListSecurity withOption3(CalendarSettingsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}