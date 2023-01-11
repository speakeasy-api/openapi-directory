package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}