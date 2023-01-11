package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database")
    public String database;
    public SqlDatabasesDeletePathParams withDatabase(String database) {
        this.database = database;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlDatabasesDeletePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlDatabasesDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}