package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesBackupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MetastoreProjectsLocationsServicesBackupsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}