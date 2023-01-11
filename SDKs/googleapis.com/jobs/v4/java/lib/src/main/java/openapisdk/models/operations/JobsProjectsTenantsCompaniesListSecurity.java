package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCompaniesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsCompaniesListSecurityOption1 option1;
    public JobsProjectsTenantsCompaniesListSecurity withOption1(JobsProjectsTenantsCompaniesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsCompaniesListSecurityOption2 option2;
    public JobsProjectsTenantsCompaniesListSecurity withOption2(JobsProjectsTenantsCompaniesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}