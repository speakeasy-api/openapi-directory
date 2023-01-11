package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorContactsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorContactsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}