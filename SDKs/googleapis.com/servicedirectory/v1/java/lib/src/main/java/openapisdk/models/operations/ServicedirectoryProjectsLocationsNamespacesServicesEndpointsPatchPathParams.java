package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}