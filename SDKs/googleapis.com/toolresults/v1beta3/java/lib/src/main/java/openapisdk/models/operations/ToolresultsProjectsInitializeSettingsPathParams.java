package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsInitializeSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsInitializeSettingsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}