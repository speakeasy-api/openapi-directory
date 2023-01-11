package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTaxRatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxRateUuid")
    public String taxRateUuid;
    public DeleteTaxRatePathParams withTaxRateUuid(String taxRateUuid) {
        this.taxRateUuid = taxRateUuid;
        return this;
    }
}