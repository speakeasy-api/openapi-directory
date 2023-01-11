package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseNameGeoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2")
    public String countryIso2;
    public ParseNameGeoPathParams withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nameFull")
    public String nameFull;
    public ParseNameGeoPathParams withNameFull(String nameFull) {
        this.nameFull = nameFull;
        return this;
    }
}