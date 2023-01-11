package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basePlanId")
    public String basePlanId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offerId")
    public String offerId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}