package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsGetSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsGetSettingsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}