package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesStopReplicaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlInstancesStopReplicaPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlInstancesStopReplicaPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}