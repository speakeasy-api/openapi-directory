package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}