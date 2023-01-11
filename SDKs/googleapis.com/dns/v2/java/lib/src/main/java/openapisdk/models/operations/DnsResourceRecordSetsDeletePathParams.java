package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DnsResourceRecordSetsDeletePathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsResourceRecordSetsDeletePathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DnsResourceRecordSetsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsResourceRecordSetsDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public DnsResourceRecordSetsDeletePathParams withType(String type) {
        this.type = type;
        return this;
    }
}