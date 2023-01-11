package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesRollbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NotebooksProjectsLocationsInstancesRollbackPathParams withName(String name) {
        this.name = name;
        return this;
    }
}