package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VersionhistoryPlatformsChannelsVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VersionhistoryPlatformsChannelsVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}