package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherUsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroidpublisherUsersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}