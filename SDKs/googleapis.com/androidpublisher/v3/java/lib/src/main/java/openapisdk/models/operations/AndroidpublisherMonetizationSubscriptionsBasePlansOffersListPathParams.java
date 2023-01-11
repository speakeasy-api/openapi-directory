package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basePlanId")
    public String basePlanId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersListPathParams withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersListPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}