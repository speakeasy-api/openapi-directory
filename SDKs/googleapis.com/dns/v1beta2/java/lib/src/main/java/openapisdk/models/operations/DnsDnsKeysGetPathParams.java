package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsDnsKeysGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dnsKeyId")
    public String dnsKeyId;
    public DnsDnsKeysGetPathParams withDnsKeyId(String dnsKeyId) {
        this.dnsKeyId = dnsKeyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsDnsKeysGetPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsDnsKeysGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}