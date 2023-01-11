package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}