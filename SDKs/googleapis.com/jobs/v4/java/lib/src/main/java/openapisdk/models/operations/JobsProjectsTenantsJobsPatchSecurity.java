package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsJobsPatchSecurityOption1 option1;
    public JobsProjectsTenantsJobsPatchSecurity withOption1(JobsProjectsTenantsJobsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public JobsProjectsTenantsJobsPatchSecurityOption2 option2;
    public JobsProjectsTenantsJobsPatchSecurity withOption2(JobsProjectsTenantsJobsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}