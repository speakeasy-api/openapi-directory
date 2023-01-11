package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievePrefixPricingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public RetrievePrefixPricingPathParams withType(String type) {
        this.type = type;
        return this;
    }
}