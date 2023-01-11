package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesRestorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service")
    public String service;
    public MetastoreProjectsLocationsServicesRestorePathParams withService(String service) {
        this.service = service;
        return this;
    }
}