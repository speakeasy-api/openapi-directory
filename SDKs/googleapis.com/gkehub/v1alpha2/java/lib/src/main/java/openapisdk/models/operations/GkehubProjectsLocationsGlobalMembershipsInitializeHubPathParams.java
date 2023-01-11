package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}