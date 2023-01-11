package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolReplicasRestartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolName")
    public String poolName;
    public ReplicapoolReplicasRestartPathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public ReplicapoolReplicasRestartPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=replicaName")
    public String replicaName;
    public ReplicapoolReplicasRestartPathParams withReplicaName(String replicaName) {
        this.replicaName = replicaName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public ReplicapoolReplicasRestartPathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}