package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stepId")
    public String stepId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}