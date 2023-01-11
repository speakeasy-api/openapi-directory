package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingProjectsSitesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingProjectsSitesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}