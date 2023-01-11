package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsSchedulesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NotebooksProjectsLocationsSchedulesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}