package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingProjectsSitesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingProjectsSitesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}