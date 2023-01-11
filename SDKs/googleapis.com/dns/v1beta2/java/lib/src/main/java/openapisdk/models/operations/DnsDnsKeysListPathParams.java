package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsDnsKeysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsDnsKeysListPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsDnsKeysListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}