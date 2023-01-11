package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebasehostingSitesVersionsPatchSecurityOption1 option1;
    public FirebasehostingSitesVersionsPatchSecurity withOption1(FirebasehostingSitesVersionsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebasehostingSitesVersionsPatchSecurityOption2 option2;
    public FirebasehostingSitesVersionsPatchSecurity withOption2(FirebasehostingSitesVersionsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}