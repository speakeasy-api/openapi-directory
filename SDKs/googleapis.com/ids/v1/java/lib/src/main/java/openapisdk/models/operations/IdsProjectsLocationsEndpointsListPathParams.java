package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdsProjectsLocationsEndpointsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}