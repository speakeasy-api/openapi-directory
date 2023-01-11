package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudiotProjectsLocationsRegistriesDevicesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}