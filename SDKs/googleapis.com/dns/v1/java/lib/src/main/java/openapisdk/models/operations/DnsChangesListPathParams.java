package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsChangesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsChangesListPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsChangesListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}