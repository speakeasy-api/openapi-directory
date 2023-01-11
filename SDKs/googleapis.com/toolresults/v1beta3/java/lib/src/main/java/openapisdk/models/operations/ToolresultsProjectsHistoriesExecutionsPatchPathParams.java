package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsPatchPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsPatchPathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsPatchPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}