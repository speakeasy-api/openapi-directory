package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MemcacheProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}