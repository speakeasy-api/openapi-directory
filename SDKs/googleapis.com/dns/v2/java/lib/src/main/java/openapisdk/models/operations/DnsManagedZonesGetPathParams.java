package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DnsManagedZonesGetPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedZone")
    public String managedZone;
    public DnsManagedZonesGetPathParams withManagedZone(String managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsManagedZonesGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}