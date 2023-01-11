package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsScansAnalyzePackagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OndemandscanningProjectsLocationsScansAnalyzePackagesPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}