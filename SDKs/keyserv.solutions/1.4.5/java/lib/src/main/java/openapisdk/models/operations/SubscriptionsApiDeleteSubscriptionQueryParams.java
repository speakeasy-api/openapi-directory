package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDeleteSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keep")
    public Boolean keep;
    public SubscriptionsApiDeleteSubscriptionQueryParams withKeep(Boolean keep) {
        this.keep = keep;
        return this;
    }
}