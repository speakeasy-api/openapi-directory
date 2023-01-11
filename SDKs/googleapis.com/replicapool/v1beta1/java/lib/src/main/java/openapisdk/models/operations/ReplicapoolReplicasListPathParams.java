package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolReplicasListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolName")
    public String poolName;
    public ReplicapoolReplicasListPathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public ReplicapoolReplicasListPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public ReplicapoolReplicasListPathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}