package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIterationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=iterationId")
    public String iterationId;
    public DeleteIterationPathParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DeleteIterationPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}