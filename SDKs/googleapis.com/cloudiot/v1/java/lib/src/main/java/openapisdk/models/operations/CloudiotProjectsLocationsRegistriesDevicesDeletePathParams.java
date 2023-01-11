package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudiotProjectsLocationsRegistriesDevicesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}