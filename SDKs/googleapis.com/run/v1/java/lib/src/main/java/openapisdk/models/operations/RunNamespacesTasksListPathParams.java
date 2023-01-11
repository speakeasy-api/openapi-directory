package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesTasksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesTasksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}