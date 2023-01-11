package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesBackupsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MetastoreProjectsLocationsServicesBackupsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}