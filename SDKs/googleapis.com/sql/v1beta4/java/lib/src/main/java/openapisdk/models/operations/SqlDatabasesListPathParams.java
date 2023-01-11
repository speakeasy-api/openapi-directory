package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlDatabasesListPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlDatabasesListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}