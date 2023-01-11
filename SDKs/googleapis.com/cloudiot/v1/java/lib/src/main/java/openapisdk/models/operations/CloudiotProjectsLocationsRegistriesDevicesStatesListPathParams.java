package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}