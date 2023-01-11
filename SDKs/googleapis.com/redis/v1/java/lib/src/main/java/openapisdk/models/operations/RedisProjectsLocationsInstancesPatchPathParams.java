package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RedisProjectsLocationsInstancesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}