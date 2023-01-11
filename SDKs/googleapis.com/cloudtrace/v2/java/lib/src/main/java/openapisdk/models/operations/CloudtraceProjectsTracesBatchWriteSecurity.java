package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesBatchWriteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTracesBatchWriteSecurityOption1 option1;
    public CloudtraceProjectsTracesBatchWriteSecurity withOption1(CloudtraceProjectsTracesBatchWriteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudtraceProjectsTracesBatchWriteSecurityOption2 option2;
    public CloudtraceProjectsTracesBatchWriteSecurity withOption2(CloudtraceProjectsTracesBatchWriteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}