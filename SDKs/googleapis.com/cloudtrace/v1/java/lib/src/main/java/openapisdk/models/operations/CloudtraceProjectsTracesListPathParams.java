package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudtraceProjectsTracesListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}