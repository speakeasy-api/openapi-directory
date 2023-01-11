package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MemcacheProjectsLocationsInstancesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}