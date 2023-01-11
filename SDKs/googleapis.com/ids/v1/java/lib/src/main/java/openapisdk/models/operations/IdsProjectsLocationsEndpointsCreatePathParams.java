package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdsProjectsLocationsEndpointsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}