package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditProjectAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public EditProjectAlt1PathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
}