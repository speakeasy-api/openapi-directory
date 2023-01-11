package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesTestNotifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RemotebuildexecutionProjectsInstancesTestNotifyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}