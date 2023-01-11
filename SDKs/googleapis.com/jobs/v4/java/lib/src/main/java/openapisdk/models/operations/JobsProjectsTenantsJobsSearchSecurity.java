package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsJobsSearchSecurityOption1 option1;
    public JobsProjectsTenantsJobsSearchSecurity withOption1(JobsProjectsTenantsJobsSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsJobsSearchSecurityOption2 option2;
    public JobsProjectsTenantsJobsSearchSecurity withOption2(JobsProjectsTenantsJobsSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}