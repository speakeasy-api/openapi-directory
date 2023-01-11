package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
}