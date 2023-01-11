package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkerReservationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkerSid")
    public String workerSid;
    public ListWorkerReservationPathParams withWorkerSid(String workerSid) {
        this.workerSid = workerSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public ListWorkerReservationPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}