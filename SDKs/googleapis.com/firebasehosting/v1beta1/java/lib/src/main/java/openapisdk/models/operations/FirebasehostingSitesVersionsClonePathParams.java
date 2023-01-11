package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsClonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingSitesVersionsClonePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}