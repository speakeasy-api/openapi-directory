package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsCompleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsCompleteSecurityOption1 option1;
    public JobsProjectsCompleteSecurity withOption1(JobsProjectsCompleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsCompleteSecurityOption2 option2;
    public JobsProjectsCompleteSecurity withOption2(JobsProjectsCompleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}