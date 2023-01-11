package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudiotProjectsLocationsRegistriesDevicesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}