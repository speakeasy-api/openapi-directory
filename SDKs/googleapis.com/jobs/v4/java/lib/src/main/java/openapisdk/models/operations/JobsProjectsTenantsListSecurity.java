package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsListSecurityOption1 option1;
    public JobsProjectsTenantsListSecurity withOption1(JobsProjectsTenantsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsListSecurityOption2 option2;
    public JobsProjectsTenantsListSecurity withOption2(JobsProjectsTenantsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}