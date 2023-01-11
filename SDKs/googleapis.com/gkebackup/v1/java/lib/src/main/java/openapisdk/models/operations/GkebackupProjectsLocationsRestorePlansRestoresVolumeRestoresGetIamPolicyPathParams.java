package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}