package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesExportMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service")
    public String service;
    public MetastoreProjectsLocationsServicesExportMetadataPathParams withService(String service) {
        this.service = service;
        return this;
    }
}