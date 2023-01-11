package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesChannelsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingSitesChannelsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}