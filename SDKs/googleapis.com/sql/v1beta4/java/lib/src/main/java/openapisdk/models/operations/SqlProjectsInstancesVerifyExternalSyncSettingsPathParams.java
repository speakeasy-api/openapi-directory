package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesVerifyExternalSyncSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlProjectsInstancesVerifyExternalSyncSettingsPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlProjectsInstancesVerifyExternalSyncSettingsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}