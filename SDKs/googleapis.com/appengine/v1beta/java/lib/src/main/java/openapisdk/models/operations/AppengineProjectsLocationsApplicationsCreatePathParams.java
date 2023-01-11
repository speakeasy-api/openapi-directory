package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsApplicationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationsId")
    public String locationsId;
    public AppengineProjectsLocationsApplicationsCreatePathParams withLocationsId(String locationsId) {
        this.locationsId = locationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectsId")
    public String projectsId;
    public AppengineProjectsLocationsApplicationsCreatePathParams withProjectsId(String projectsId) {
        this.projectsId = projectsId;
        return this;
    }
}