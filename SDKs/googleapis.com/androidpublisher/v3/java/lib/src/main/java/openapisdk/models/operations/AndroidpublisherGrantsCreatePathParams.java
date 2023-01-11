package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherGrantsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroidpublisherGrantsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}