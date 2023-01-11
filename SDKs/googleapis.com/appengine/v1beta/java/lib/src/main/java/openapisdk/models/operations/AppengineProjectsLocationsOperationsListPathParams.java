package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationsId")
    public String locationsId;
    public AppengineProjectsLocationsOperationsListPathParams withLocationsId(String locationsId) {
        this.locationsId = locationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectsId")
    public String projectsId;
    public AppengineProjectsLocationsOperationsListPathParams withProjectsId(String projectsId) {
        this.projectsId = projectsId;
        return this;
    }
}