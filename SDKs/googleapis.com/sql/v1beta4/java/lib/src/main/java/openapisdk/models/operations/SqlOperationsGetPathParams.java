package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operation")
    public String operation;
    public SqlOperationsGetPathParams withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlOperationsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}