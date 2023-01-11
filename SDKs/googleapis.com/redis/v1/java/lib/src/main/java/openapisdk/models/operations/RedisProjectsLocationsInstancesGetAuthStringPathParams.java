package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesGetAuthStringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RedisProjectsLocationsInstancesGetAuthStringPathParams withName(String name) {
        this.name = name;
        return this;
    }
}