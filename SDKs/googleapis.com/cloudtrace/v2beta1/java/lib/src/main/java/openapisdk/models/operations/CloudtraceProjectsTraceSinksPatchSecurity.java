package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTraceSinksPatchSecurityOption1 option1;
    public CloudtraceProjectsTraceSinksPatchSecurity withOption1(CloudtraceProjectsTraceSinksPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTraceSinksPatchSecurityOption2 option2;
    public CloudtraceProjectsTraceSinksPatchSecurity withOption2(CloudtraceProjectsTraceSinksPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}