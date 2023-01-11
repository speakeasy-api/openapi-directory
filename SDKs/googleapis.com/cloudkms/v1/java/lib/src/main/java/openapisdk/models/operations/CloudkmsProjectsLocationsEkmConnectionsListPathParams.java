package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsEkmConnectionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudkmsProjectsLocationsEkmConnectionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}