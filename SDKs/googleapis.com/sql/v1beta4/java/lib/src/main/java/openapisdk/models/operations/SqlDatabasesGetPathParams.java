package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database")
    public String database;
    public SqlDatabasesGetPathParams withDatabase(String database) {
        this.database = database;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlDatabasesGetPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlDatabasesGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}