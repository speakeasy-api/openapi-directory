package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingAssignmentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingProfileId")
    public String billingProfileId;
    public DfareportingBillingAssignmentsListPathParams withBillingProfileId(String billingProfileId) {
        this.billingProfileId = billingProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingBillingAssignmentsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}