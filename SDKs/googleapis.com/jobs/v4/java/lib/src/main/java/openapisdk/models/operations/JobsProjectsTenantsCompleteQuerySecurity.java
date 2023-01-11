package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCompleteQuerySecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsCompleteQuerySecurityOption1 option1;
    public JobsProjectsTenantsCompleteQuerySecurity withOption1(JobsProjectsTenantsCompleteQuerySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsCompleteQuerySecurityOption2 option2;
    public JobsProjectsTenantsCompleteQuerySecurity withOption2(JobsProjectsTenantsCompleteQuerySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}