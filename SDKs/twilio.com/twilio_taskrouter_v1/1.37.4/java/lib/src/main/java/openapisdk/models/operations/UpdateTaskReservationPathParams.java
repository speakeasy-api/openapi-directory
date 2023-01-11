package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskReservationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateTaskReservationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public UpdateTaskReservationPathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public UpdateTaskReservationPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}