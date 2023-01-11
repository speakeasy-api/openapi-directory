package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesTasksGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RunNamespacesTasksGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}