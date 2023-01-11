package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 option1;
    public BillingbudgetsBillingAccountsBudgetsPatchSecurity withOption1(BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 option2;
    public BillingbudgetsBillingAccountsBudgetsPatchSecurity withOption2(BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}