package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsPatchSecurityOption1 option1;
    public JobsProjectsJobsPatchSecurity withOption1(JobsProjectsJobsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsJobsPatchSecurityOption2 option2;
    public JobsProjectsJobsPatchSecurity withOption2(JobsProjectsJobsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}