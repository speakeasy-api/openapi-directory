package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesSubscriptionsRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherPurchasesSubscriptionsRevokePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public AndroidpublisherPurchasesSubscriptionsRevokePathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public AndroidpublisherPurchasesSubscriptionsRevokePathParams withToken(String token) {
        this.token = token;
        return this;
    }
}