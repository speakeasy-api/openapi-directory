package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MetastoreProjectsLocationsServicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}