package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesReleasesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasehostingSitesReleasesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}