package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudiotProjectsLocationsRegistriesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}