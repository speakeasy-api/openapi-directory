package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesAlterLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service")
    public String service;
    public MetastoreProjectsLocationsServicesAlterLocationPathParams withService(String service) {
        this.service = service;
        return this;
    }
}