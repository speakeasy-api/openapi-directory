package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsGetV2ProjectsProjectIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsGetV2ProjectsProjectIdGetPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}