package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsCompaniesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsCompaniesCreateSecurityOption1 option1;
    public JobsProjectsCompaniesCreateSecurity withOption1(JobsProjectsCompaniesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsCompaniesCreateSecurityOption2 option2;
    public JobsProjectsCompaniesCreateSecurity withOption2(JobsProjectsCompaniesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}