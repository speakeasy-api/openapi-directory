package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievePricingCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public RetrievePricingCountryPathParams withType(String type) {
        this.type = type;
        return this;
    }
}