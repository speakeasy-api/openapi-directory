package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsDeleteSecurityOption1 option1;
    public JobsProjectsJobsDeleteSecurity withOption1(JobsProjectsJobsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsDeleteSecurityOption2 option2;
    public JobsProjectsJobsDeleteSecurity withOption2(JobsProjectsJobsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}