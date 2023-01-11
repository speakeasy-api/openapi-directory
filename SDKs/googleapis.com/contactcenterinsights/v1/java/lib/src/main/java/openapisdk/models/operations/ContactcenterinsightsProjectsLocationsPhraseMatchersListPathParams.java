package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}