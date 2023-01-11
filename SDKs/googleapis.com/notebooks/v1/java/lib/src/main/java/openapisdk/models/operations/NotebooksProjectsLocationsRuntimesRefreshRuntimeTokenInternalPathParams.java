package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams withName(String name) {
        this.name = name;
        return this;
    }
}