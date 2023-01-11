package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesRevisionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsServicesRevisionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}