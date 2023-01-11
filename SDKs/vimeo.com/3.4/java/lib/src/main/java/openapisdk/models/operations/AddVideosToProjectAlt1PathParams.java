package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideosToProjectAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public AddVideosToProjectAlt1PathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
}