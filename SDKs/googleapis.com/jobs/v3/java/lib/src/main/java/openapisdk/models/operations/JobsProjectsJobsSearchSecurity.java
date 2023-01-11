package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsSearchSecurityOption1 option1;
    public JobsProjectsJobsSearchSecurity withOption1(JobsProjectsJobsSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsSearchSecurityOption2 option2;
    public JobsProjectsJobsSearchSecurity withOption2(JobsProjectsJobsSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}