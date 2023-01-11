package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}