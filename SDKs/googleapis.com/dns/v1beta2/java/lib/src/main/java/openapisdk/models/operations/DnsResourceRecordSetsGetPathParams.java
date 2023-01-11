package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsResourceRecordSetsGetPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DnsResourceRecordSetsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsResourceRecordSetsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public DnsResourceRecordSetsGetPathParams withType(String type) {
        this.type = type;
        return this;
    }
}