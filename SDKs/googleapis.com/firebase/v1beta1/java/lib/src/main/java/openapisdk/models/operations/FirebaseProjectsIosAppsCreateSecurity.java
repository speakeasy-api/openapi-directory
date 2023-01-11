package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsIosAppsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsIosAppsCreateSecurityOption1 option1;
    public FirebaseProjectsIosAppsCreateSecurity withOption1(FirebaseProjectsIosAppsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsIosAppsCreateSecurityOption2 option2;
    public FirebaseProjectsIosAppsCreateSecurity withOption2(FirebaseProjectsIosAppsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}