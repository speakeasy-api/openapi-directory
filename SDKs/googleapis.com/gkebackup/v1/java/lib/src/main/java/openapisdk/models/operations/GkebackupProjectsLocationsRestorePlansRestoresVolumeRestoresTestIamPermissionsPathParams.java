package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}