package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RemotebuildexecutionProjectsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}