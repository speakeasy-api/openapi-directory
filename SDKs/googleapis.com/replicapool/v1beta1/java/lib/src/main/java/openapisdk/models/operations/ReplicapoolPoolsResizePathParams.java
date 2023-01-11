package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolPoolsResizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolName")
    public String poolName;
    public ReplicapoolPoolsResizePathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public ReplicapoolPoolsResizePathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public ReplicapoolPoolsResizePathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}