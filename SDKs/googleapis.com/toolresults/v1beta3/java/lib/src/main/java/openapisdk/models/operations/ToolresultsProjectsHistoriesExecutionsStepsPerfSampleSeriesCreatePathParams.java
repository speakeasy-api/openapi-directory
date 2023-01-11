package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stepId")
    public String stepId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}