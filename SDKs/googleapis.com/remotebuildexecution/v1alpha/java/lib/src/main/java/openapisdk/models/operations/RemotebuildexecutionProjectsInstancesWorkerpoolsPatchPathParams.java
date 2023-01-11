package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}