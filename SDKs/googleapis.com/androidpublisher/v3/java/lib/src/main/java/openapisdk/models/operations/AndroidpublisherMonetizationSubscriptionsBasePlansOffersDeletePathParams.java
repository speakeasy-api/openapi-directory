package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basePlanId")
    public String basePlanId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offerId")
    public String offerId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}