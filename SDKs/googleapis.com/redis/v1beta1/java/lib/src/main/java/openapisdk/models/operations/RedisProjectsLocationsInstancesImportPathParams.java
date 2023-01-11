package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RedisProjectsLocationsInstancesImportPathParams withName(String name) {
        this.name = name;
        return this;
    }
}