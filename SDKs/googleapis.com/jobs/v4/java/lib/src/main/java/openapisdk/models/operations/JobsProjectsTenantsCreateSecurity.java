package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsCreateSecurityOption1 option1;
    public JobsProjectsTenantsCreateSecurity withOption1(JobsProjectsTenantsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsCreateSecurityOption2 option2;
    public JobsProjectsTenantsCreateSecurity withOption2(JobsProjectsTenantsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}