package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorContactsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorContactsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}