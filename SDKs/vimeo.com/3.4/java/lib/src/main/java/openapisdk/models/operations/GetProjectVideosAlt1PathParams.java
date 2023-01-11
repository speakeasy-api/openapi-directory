package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectVideosAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public GetProjectVideosAlt1PathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
}