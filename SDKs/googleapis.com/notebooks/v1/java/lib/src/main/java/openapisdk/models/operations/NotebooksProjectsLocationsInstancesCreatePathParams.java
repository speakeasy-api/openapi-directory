package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NotebooksProjectsLocationsInstancesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}