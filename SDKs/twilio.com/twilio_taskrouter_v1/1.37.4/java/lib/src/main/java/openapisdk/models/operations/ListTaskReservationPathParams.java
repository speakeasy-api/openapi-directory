package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskReservationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskSid")
    public String taskSid;
    public ListTaskReservationPathParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListTaskReservationPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}