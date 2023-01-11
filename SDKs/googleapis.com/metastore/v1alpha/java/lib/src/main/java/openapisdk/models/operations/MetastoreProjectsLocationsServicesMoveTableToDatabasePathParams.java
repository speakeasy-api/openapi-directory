package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesMoveTableToDatabasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service")
    public String service;
    public MetastoreProjectsLocationsServicesMoveTableToDatabasePathParams withService(String service) {
        this.service = service;
        return this;
    }
}