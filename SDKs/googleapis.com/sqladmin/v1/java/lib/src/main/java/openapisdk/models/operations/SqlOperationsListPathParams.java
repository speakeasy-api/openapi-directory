package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlOperationsListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}