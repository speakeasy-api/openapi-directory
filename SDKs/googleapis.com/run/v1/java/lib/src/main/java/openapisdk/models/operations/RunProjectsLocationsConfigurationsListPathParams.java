package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsConfigurationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsConfigurationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}