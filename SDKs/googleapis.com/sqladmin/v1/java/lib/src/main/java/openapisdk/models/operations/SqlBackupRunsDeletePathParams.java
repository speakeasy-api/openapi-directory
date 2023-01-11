package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlBackupRunsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SqlBackupRunsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlBackupRunsDeletePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlBackupRunsDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}