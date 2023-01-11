package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicedirectoryProjectsLocationsNamespacesServicesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}