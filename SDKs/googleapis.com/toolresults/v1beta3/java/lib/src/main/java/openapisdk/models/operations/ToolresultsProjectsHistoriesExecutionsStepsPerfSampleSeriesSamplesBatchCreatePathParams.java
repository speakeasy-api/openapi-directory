package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sampleSeriesId")
    public String sampleSeriesId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams withSampleSeriesId(String sampleSeriesId) {
        this.sampleSeriesId = sampleSeriesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stepId")
    public String stepId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}