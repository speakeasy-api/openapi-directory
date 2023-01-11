package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkerInstanceStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkerSid")
    public String workerSid;
    public FetchWorkerInstanceStatisticsPathParams withWorkerSid(String workerSid) {
        this.workerSid = workerSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;
    public FetchWorkerInstanceStatisticsPathParams withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}