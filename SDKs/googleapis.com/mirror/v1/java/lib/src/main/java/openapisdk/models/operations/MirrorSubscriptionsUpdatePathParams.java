package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorSubscriptionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorSubscriptionsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}