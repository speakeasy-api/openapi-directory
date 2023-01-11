package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingRatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingProfileId")
    public String billingProfileId;
    public DfareportingBillingRatesListPathParams withBillingProfileId(String billingProfileId) {
        this.billingProfileId = billingProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingBillingRatesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}