package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolReplicasDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolName")
    public String poolName;
    public ReplicapoolReplicasDeletePathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public ReplicapoolReplicasDeletePathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=replicaName")
    public String replicaName;
    public ReplicapoolReplicasDeletePathParams withReplicaName(String replicaName) {
        this.replicaName = replicaName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public ReplicapoolReplicasDeletePathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}