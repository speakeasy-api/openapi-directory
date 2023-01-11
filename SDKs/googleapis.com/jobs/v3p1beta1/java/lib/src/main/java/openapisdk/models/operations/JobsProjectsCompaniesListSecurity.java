package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsCompaniesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsCompaniesListSecurityOption1 option1;
    public JobsProjectsCompaniesListSecurity withOption1(JobsProjectsCompaniesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsCompaniesListSecurityOption2 option2;
    public JobsProjectsCompaniesListSecurity withOption2(JobsProjectsCompaniesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}