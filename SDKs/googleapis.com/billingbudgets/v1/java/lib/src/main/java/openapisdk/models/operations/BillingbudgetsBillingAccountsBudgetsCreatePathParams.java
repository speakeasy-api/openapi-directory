package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BillingbudgetsBillingAccountsBudgetsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}