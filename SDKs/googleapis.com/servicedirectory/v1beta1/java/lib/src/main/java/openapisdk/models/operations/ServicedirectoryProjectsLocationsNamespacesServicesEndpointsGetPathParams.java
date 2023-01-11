package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}