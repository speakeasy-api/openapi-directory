package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsRemoveCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsRemoveCollaboratorPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ProjectsRemoveCollaboratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}