package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RedisProjectsLocationsInstancesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}