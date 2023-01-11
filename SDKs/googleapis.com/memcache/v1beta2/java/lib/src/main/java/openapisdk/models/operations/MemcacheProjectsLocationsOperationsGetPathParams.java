package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MemcacheProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}