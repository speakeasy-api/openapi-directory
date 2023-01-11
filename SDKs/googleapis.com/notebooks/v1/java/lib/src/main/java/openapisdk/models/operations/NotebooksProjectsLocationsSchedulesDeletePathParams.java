package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsSchedulesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NotebooksProjectsLocationsSchedulesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}