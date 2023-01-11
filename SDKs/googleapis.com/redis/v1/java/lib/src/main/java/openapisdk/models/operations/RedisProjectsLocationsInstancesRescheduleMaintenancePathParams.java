package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesRescheduleMaintenancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RedisProjectsLocationsInstancesRescheduleMaintenancePathParams withName(String name) {
        this.name = name;
        return this;
    }
}