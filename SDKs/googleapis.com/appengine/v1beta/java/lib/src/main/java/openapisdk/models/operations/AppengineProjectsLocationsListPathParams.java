package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectsId")
    public String projectsId;
    public AppengineProjectsLocationsListPathParams withProjectsId(String projectsId) {
        this.projectsId = projectsId;
        return this;
    }
}