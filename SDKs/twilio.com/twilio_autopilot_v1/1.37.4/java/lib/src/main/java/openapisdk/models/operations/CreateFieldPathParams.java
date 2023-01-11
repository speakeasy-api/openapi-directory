package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public CreateFieldPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public CreateFieldPathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
}