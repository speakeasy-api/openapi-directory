package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTaskStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchTaskStatisticsPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public FetchTaskStatisticsPathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
}