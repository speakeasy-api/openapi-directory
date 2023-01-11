package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsApplicationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationsId")
    public String applicationsId;
    public AppengineProjectsLocationsApplicationsGetPathParams withApplicationsId(String applicationsId) {
        this.applicationsId = applicationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationsId")
    public String locationsId;
    public AppengineProjectsLocationsApplicationsGetPathParams withLocationsId(String locationsId) {
        this.locationsId = locationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectsId")
    public String projectsId;
    public AppengineProjectsLocationsApplicationsGetPathParams withProjectsId(String projectsId) {
        this.projectsId = projectsId;
        return this;
    }
}