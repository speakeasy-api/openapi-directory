package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MemcacheProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}