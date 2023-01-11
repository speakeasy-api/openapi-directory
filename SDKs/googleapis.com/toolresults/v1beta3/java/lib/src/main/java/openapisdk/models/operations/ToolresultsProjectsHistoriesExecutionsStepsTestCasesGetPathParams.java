package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stepId")
    public String stepId;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=testCaseId")
    public String testCaseId;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams withTestCaseId(String testCaseId) {
        this.testCaseId = testCaseId;
        return this;
    }
}