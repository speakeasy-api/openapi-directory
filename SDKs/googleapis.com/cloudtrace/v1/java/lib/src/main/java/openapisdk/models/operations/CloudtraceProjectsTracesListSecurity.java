package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTracesListSecurityOption1 option1;
    public CloudtraceProjectsTracesListSecurity withOption1(CloudtraceProjectsTracesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTracesListSecurityOption2 option2;
    public CloudtraceProjectsTracesListSecurity withOption2(CloudtraceProjectsTracesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}