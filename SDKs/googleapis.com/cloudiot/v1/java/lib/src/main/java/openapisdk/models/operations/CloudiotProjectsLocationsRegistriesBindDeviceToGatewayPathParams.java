package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}