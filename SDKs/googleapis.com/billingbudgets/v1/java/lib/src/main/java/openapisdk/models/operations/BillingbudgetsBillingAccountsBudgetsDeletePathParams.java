package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BillingbudgetsBillingAccountsBudgetsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}