package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorSubscriptionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorSubscriptionsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}