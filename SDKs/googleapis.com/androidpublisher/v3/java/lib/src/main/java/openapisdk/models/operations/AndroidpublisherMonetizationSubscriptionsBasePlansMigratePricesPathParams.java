package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basePlanId")
    public String basePlanId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}