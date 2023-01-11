package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnpublishIterationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=iterationId")
    public String iterationId;
    public UnpublishIterationPathParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public UnpublishIterationPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}