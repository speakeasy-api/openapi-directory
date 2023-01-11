package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database")
    public String database;
    public SqlDatabasesPatchPathParams withDatabase(String database) {
        this.database = database;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlDatabasesPatchPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlDatabasesPatchPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}