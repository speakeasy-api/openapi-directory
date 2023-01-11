package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsPatchTracesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudtraceProjectsPatchTracesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}