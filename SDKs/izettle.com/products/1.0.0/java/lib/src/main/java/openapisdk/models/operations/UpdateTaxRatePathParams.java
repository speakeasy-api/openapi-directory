package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaxRatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxRateUuid")
    public String taxRateUuid;
    public UpdateTaxRatePathParams withTaxRateUuid(String taxRateUuid) {
        this.taxRateUuid = taxRateUuid;
        return this;
    }
}