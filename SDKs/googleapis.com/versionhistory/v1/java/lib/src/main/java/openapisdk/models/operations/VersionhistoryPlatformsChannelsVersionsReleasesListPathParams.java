package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VersionhistoryPlatformsChannelsVersionsReleasesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VersionhistoryPlatformsChannelsVersionsReleasesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}