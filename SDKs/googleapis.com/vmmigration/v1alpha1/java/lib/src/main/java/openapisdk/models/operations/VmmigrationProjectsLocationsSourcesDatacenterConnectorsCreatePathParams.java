package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}