package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesSetLabelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NotebooksProjectsLocationsInstancesSetLabelsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}