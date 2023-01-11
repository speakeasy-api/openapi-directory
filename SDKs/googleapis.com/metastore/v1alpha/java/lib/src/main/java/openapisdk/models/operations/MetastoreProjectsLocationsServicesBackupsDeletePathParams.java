package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesBackupsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MetastoreProjectsLocationsServicesBackupsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}