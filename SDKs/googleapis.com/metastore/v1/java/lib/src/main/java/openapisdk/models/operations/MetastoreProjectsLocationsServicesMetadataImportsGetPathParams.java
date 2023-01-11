package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMetadataImportsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MetastoreProjectsLocationsServicesMetadataImportsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}