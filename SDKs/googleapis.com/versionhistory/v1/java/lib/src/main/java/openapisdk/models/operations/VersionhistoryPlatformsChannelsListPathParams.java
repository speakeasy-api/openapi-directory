package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VersionhistoryPlatformsChannelsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VersionhistoryPlatformsChannelsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}