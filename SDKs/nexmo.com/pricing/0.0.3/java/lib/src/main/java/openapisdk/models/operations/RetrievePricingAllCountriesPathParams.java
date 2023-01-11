package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievePricingAllCountriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public RetrievePricingAllCountriesPathParams withType(String type) {
        this.type = type;
        return this;
    }
}