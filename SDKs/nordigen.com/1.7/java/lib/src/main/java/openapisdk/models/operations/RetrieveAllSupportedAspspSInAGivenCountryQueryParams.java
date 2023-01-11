package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveAllSupportedAspspSInAGivenCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public RetrieveAllSupportedAspspSInAGivenCountryQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}