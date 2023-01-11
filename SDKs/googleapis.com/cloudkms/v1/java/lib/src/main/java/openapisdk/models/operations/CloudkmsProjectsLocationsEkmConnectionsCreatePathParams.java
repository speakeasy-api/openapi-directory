package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsEkmConnectionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudkmsProjectsLocationsEkmConnectionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}