package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingAssignmentsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingProfileId")
    public String billingProfileId;
    public DfareportingBillingAssignmentsInsertPathParams withBillingProfileId(String billingProfileId) {
        this.billingProfileId = billingProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingBillingAssignmentsInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}