package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIterationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=iterationId")
    public String iterationId;
    public UpdateIterationPathParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public UpdateIterationPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}