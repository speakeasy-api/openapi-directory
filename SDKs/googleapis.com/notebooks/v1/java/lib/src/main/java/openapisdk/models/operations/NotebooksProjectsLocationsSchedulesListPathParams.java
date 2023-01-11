package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsSchedulesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NotebooksProjectsLocationsSchedulesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}