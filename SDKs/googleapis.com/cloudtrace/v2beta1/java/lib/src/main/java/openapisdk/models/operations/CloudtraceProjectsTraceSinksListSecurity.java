package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTraceSinksListSecurityOption1 option1;
    public CloudtraceProjectsTraceSinksListSecurity withOption1(CloudtraceProjectsTraceSinksListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTraceSinksListSecurityOption2 option2;
    public CloudtraceProjectsTraceSinksListSecurity withOption2(CloudtraceProjectsTraceSinksListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}