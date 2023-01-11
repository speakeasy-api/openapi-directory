package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicedirectoryProjectsLocationsNamespacesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}