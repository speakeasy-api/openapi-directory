package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingSitesVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}