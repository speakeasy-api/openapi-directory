package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsPopulateFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingSitesVersionsPopulateFilesPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}