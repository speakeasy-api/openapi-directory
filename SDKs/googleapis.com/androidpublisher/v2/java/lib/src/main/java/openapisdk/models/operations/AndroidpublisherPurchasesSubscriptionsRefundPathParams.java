package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesSubscriptionsRefundPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherPurchasesSubscriptionsRefundPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public AndroidpublisherPurchasesSubscriptionsRefundPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public AndroidpublisherPurchasesSubscriptionsRefundPathParams withToken(String token) {
        this.token = token;
        return this;
    }
}