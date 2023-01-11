package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUnderstandSamplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public DeleteUnderstandSamplePathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteUnderstandSamplePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public DeleteUnderstandSamplePathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
}