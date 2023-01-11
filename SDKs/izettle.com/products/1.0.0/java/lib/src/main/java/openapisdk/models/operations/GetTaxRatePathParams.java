package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaxRatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxRateUuid")
    public String taxRateUuid;
    public GetTaxRatePathParams withTaxRateUuid(String taxRateUuid) {
        this.taxRateUuid = taxRateUuid;
        return this;
    }
}