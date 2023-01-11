package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesSubscriptionsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherPurchasesSubscriptionsCancelPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public AndroidpublisherPurchasesSubscriptionsCancelPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public AndroidpublisherPurchasesSubscriptionsCancelPathParams withToken(String token) {
        this.token = token;
        return this;
    }
}