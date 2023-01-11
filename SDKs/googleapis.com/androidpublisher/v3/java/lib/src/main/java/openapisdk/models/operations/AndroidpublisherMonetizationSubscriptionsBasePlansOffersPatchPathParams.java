package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basePlanId")
    public String basePlanId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offerId")
    public String offerId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}