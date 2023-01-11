package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlConnectGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlConnectGetPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlConnectGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}