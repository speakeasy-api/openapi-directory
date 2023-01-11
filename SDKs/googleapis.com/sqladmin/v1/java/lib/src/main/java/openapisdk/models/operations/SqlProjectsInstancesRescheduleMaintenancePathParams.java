package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesRescheduleMaintenancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlProjectsInstancesRescheduleMaintenancePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlProjectsInstancesRescheduleMaintenancePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}