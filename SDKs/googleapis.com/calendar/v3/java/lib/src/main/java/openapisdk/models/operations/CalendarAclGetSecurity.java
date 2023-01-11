package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CalendarAclGetSecurityOption1 option1;
    public CalendarAclGetSecurity withOption1(CalendarAclGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CalendarAclGetSecurityOption2 option2;
    public CalendarAclGetSecurity withOption2(CalendarAclGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}