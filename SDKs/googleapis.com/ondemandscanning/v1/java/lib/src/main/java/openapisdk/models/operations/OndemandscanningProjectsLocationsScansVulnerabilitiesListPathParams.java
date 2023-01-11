package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsScansVulnerabilitiesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}