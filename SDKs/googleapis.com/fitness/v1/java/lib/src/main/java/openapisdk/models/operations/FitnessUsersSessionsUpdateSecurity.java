package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersSessionsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FitnessUsersSessionsUpdateSecurityOption1 option1;
    public FitnessUsersSessionsUpdateSecurity withOption1(FitnessUsersSessionsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FitnessUsersSessionsUpdateSecurityOption2 option2;
    public FitnessUsersSessionsUpdateSecurity withOption2(FitnessUsersSessionsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}