package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsClustersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clusterId")
    public String clusterId;
    public ToolresultsProjectsHistoriesExecutionsClustersGetPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ToolresultsProjectsHistoriesExecutionsClustersGetPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsClustersGetPathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsClustersGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}