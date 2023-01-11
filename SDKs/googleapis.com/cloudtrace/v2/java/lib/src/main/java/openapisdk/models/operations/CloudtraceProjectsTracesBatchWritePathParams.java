package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesBatchWritePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudtraceProjectsTracesBatchWritePathParams withName(String name) {
        this.name = name;
        return this;
    }
}