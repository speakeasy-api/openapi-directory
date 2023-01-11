package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BillingbudgetsBillingAccountsBudgetsListSecurityOption1 option1;
    public BillingbudgetsBillingAccountsBudgetsListSecurity withOption1(BillingbudgetsBillingAccountsBudgetsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BillingbudgetsBillingAccountsBudgetsListSecurityOption2 option2;
    public BillingbudgetsBillingAccountsBudgetsListSecurity withOption2(BillingbudgetsBillingAccountsBudgetsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}