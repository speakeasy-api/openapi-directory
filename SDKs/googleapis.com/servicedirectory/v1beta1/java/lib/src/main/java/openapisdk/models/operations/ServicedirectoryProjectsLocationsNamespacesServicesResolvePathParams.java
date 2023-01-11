package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams withName(String name) {
        this.name = name;
        return this;
    }
}