package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZoneOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsManagedZoneOperationsGetPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operation")
    public String operation;
    public DnsManagedZoneOperationsGetPathParams withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsManagedZoneOperationsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}