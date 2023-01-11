package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public TranslateProjectsLocationsListSecurityOption1 option1;
    public TranslateProjectsLocationsListSecurity withOption1(TranslateProjectsLocationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public TranslateProjectsLocationsListSecurityOption2 option2;
    public TranslateProjectsLocationsListSecurity withOption2(TranslateProjectsLocationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}