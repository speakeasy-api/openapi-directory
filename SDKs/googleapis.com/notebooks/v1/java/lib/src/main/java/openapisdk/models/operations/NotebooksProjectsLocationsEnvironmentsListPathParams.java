package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsEnvironmentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NotebooksProjectsLocationsEnvironmentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}