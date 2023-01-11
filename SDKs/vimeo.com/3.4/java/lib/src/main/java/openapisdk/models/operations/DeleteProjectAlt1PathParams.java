package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public DeleteProjectAlt1PathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
}