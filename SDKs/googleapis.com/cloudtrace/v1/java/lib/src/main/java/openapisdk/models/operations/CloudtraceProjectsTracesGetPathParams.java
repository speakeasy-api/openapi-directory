package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudtraceProjectsTracesGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=traceId")
    public String traceId;
    public CloudtraceProjectsTracesGetPathParams withTraceId(String traceId) {
        this.traceId = traceId;
        return this;
    }
}