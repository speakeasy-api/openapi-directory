package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsJobsListSecurityOption1 option1;
    public JobsProjectsTenantsJobsListSecurity withOption1(JobsProjectsTenantsJobsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsJobsListSecurityOption2 option2;
    public JobsProjectsTenantsJobsListSecurity withOption2(JobsProjectsTenantsJobsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}