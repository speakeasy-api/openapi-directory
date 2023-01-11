package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GkehubProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}