package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=personalNameFull")
    public String personalNameFull;
    public CountryPathParams withPersonalNameFull(String personalNameFull) {
        this.personalNameFull = personalNameFull;
        return this;
    }
}