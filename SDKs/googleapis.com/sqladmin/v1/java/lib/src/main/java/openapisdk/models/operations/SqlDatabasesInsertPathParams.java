package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlDatabasesInsertPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlDatabasesInsertPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}