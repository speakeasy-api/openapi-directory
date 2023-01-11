package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsageChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=recurringApplicationChargeId")
    public String recurringApplicationChargeId;
    public CreateUsageChargePathParams withRecurringApplicationChargeId(String recurringApplicationChargeId) {
        this.recurringApplicationChargeId = recurringApplicationChargeId;
        return this;
    }
}