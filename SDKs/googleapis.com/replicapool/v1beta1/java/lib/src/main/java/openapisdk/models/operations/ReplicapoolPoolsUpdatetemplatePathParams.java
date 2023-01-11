package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolPoolsUpdatetemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolName")
    public String poolName;
    public ReplicapoolPoolsUpdatetemplatePathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public ReplicapoolPoolsUpdatetemplatePathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public ReplicapoolPoolsUpdatetemplatePathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}