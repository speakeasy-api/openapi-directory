package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMetadataImportsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MetastoreProjectsLocationsServicesMetadataImportsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}