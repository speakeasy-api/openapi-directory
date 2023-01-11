package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sampleSeriesId")
    public String sampleSeriesId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams withSampleSeriesId(String sampleSeriesId) {
        this.sampleSeriesId = sampleSeriesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stepId")
    public String stepId;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}