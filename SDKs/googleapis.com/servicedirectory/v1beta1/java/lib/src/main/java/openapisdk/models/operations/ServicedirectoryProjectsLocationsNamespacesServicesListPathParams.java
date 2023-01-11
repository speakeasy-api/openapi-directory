package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicedirectoryProjectsLocationsNamespacesServicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}