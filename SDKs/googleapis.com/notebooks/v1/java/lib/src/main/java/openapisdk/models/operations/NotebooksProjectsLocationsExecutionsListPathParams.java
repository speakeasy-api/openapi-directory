package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsExecutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NotebooksProjectsLocationsExecutionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}