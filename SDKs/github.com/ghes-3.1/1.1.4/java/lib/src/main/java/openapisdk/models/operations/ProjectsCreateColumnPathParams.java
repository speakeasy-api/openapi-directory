package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsCreateColumnPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}