package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkspaceRealTimeStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskChannel")
    public String taskChannel;
    public FetchWorkspaceRealTimeStatisticsQueryParams withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
}