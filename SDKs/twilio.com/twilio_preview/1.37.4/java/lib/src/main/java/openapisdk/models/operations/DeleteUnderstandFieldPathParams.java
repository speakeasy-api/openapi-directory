package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUnderstandFieldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public DeleteUnderstandFieldPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteUnderstandFieldPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public DeleteUnderstandFieldPathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
}