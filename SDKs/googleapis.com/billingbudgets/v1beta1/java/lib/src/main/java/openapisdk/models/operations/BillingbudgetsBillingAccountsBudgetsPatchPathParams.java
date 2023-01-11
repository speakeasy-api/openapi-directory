package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BillingbudgetsBillingAccountsBudgetsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}