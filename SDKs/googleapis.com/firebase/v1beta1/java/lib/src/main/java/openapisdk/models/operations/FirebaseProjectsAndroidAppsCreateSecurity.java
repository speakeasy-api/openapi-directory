package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAndroidAppsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsAndroidAppsCreateSecurityOption1 option1;
    public FirebaseProjectsAndroidAppsCreateSecurity withOption1(FirebaseProjectsAndroidAppsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsAndroidAppsCreateSecurityOption2 option2;
    public FirebaseProjectsAndroidAppsCreateSecurity withOption2(FirebaseProjectsAndroidAppsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}