package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RedisProjectsLocationsInstancesExportPathParams withName(String name) {
        this.name = name;
        return this;
    }
}