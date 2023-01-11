package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSamplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public CreateSamplePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public CreateSamplePathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
}