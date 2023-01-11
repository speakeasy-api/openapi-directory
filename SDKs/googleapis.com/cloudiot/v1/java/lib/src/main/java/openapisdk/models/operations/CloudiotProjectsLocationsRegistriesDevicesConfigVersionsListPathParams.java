package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}