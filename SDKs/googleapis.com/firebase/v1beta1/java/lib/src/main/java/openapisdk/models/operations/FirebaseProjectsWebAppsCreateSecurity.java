package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsWebAppsCreateSecurityOption1 option1;
    public FirebaseProjectsWebAppsCreateSecurity withOption1(FirebaseProjectsWebAppsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsWebAppsCreateSecurityOption2 option2;
    public FirebaseProjectsWebAppsCreateSecurity withOption2(FirebaseProjectsWebAppsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}