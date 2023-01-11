package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsWebAppsPatchSecurityOption1 option1;
    public FirebaseProjectsWebAppsPatchSecurity withOption1(FirebaseProjectsWebAppsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsWebAppsPatchSecurityOption2 option2;
    public FirebaseProjectsWebAppsPatchSecurity withOption2(FirebaseProjectsWebAppsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}