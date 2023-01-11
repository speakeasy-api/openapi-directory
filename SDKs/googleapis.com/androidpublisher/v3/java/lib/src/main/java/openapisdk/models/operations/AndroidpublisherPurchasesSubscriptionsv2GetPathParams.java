package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesSubscriptionsv2GetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherPurchasesSubscriptionsv2GetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public AndroidpublisherPurchasesSubscriptionsv2GetPathParams withToken(String token) {
        this.token = token;
        return this;
    }
}