package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherUsersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroidpublisherUsersCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}