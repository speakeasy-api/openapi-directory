package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams withName(String name) {
        this.name = name;
        return this;
    }
}