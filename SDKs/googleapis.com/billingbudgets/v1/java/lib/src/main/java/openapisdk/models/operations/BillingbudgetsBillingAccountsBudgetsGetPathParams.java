package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BillingbudgetsBillingAccountsBudgetsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}