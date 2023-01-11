package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsListSecurityOption1 option1;
    public JobsProjectsJobsListSecurity withOption1(JobsProjectsJobsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsListSecurityOption2 option2;
    public JobsProjectsJobsListSecurity withOption2(JobsProjectsJobsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}