package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesQueryMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service")
    public String service;
    public MetastoreProjectsLocationsServicesQueryMetadataPathParams withService(String service) {
        this.service = service;
        return this;
    }
}