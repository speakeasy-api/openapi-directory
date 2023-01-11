package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RemotebuildexecutionProjectsInstancesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}