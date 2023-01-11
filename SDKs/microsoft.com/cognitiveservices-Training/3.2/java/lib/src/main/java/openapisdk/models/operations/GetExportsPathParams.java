package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=iterationId")
    public String iterationId;
    public GetExportsPathParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetExportsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}