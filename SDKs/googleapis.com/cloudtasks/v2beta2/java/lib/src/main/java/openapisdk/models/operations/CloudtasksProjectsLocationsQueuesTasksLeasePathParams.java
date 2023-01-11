package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksLeasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudtasksProjectsLocationsQueuesTasksLeasePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}