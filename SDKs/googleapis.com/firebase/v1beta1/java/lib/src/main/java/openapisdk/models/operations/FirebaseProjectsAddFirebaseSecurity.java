package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAddFirebaseSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsAddFirebaseSecurityOption1 option1;
    public FirebaseProjectsAddFirebaseSecurity withOption1(FirebaseProjectsAddFirebaseSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebaseProjectsAddFirebaseSecurityOption2 option2;
    public FirebaseProjectsAddFirebaseSecurity withOption2(FirebaseProjectsAddFirebaseSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}