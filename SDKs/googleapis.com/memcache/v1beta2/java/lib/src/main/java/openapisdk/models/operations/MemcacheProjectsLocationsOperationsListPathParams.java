package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MemcacheProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}