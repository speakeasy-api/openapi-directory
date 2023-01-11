package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GkehubProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}