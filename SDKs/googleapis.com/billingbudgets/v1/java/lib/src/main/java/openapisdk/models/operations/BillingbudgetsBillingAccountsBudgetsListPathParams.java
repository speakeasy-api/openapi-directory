package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BillingbudgetsBillingAccountsBudgetsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}