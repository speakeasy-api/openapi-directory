package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsLocalPostsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsLocalPostsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}