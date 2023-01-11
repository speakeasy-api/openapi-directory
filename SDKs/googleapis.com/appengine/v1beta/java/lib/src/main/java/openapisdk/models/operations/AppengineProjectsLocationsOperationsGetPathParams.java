package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationsId")
    public String locationsId;
    public AppengineProjectsLocationsOperationsGetPathParams withLocationsId(String locationsId) {
        this.locationsId = locationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operationsId")
    public String operationsId;
    public AppengineProjectsLocationsOperationsGetPathParams withOperationsId(String operationsId) {
        this.operationsId = operationsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectsId")
    public String projectsId;
    public AppengineProjectsLocationsOperationsGetPathParams withProjectsId(String projectsId) {
        this.projectsId = projectsId;
        return this;
    }
}