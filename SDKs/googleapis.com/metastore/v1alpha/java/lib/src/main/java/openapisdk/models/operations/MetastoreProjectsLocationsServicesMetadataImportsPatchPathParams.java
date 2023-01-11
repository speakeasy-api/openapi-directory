package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MetastoreProjectsLocationsServicesMetadataImportsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}