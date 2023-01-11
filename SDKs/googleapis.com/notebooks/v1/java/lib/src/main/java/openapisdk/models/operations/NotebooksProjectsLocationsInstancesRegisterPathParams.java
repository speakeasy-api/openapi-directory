package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesRegisterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NotebooksProjectsLocationsInstancesRegisterPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}