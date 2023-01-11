package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelinePatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorTimelinePatchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}