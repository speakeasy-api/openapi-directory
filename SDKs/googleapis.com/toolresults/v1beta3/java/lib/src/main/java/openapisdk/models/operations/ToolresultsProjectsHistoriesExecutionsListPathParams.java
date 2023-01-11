package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=historyId")
    public String historyId;
    public ToolresultsProjectsHistoriesExecutionsListPathParams withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ToolresultsProjectsHistoriesExecutionsListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}