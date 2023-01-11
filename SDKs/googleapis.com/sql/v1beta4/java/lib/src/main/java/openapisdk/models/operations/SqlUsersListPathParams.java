package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlUsersListPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlUsersListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}