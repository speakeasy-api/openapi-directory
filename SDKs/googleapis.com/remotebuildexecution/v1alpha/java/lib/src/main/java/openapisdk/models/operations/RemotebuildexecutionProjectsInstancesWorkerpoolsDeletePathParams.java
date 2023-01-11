package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}