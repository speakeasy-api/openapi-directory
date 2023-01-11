package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIterationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetIterationsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}