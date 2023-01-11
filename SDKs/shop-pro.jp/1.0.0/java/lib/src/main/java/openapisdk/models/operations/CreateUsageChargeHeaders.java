package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsageChargeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Appstore-Usage-Charge-Token")
    public String xAppstoreUsageChargeToken;
    public CreateUsageChargeHeaders withXAppstoreUsageChargeToken(String xAppstoreUsageChargeToken) {
        this.xAppstoreUsageChargeToken = xAppstoreUsageChargeToken;
        return this;
    }
}