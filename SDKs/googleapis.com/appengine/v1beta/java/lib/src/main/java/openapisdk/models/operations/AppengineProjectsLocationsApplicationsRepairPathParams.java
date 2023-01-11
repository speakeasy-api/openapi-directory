package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsApplicationsRepairPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationsId")
    public String applicationsId;
    public AppengineProjectsLocationsApplicationsRepairPathParams withApplicationsId(String applicationsId) {
        this.applicationsId = applicationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationsId")
    public String locationsId;
    public AppengineProjectsLocationsApplicationsRepairPathParams withLocationsId(String locationsId) {
        this.locationsId = locationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectsId")
    public String projectsId;
    public AppengineProjectsLocationsApplicationsRepairPathParams withProjectsId(String projectsId) {
        this.projectsId = projectsId;
        return this;
    }
}