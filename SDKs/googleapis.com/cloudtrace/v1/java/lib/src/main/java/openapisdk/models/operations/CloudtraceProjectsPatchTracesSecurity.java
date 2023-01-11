package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsPatchTracesSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsPatchTracesSecurityOption1 option1;
    public CloudtraceProjectsPatchTracesSecurity withOption1(CloudtraceProjectsPatchTracesSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsPatchTracesSecurityOption2 option2;
    public CloudtraceProjectsPatchTracesSecurity withOption2(CloudtraceProjectsPatchTracesSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}