package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams withName(String name) {
        this.name = name;
        return this;
    }
}