package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}