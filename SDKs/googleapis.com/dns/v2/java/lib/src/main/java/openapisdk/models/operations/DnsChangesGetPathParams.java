package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsChangesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeId")
    public String changeId;
    public DnsChangesGetPathParams withChangeId(String changeId) {
        this.changeId = changeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DnsChangesGetPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsChangesGetPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsChangesGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}