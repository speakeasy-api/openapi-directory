package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}