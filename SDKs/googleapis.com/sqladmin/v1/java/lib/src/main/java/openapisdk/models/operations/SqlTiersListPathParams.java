package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlTiersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlTiersListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}