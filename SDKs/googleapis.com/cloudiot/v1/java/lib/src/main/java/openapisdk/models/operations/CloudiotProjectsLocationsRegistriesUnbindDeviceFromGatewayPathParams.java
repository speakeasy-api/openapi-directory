package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}