package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDeleteSubscription2QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keep")
    public Boolean keep;
    public SubscriptionsApiDeleteSubscription2QueryParams withKeep(Boolean keep) {
        this.keep = keep;
        return this;
    }
}