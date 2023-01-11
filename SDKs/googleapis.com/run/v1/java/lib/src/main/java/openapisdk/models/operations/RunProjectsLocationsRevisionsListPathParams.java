package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsRevisionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsRevisionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}