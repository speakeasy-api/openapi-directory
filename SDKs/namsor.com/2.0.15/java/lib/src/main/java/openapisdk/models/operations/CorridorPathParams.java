package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CorridorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2From")
    public String countryIso2From;
    public CorridorPathParams withCountryIso2From(String countryIso2From) {
        this.countryIso2From = countryIso2From;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2To")
    public String countryIso2To;
    public CorridorPathParams withCountryIso2To(String countryIso2To) {
        this.countryIso2To = countryIso2To;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstNameFrom")
    public String firstNameFrom;
    public CorridorPathParams withFirstNameFrom(String firstNameFrom) {
        this.firstNameFrom = firstNameFrom;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstNameTo")
    public String firstNameTo;
    public CorridorPathParams withFirstNameTo(String firstNameTo) {
        this.firstNameTo = firstNameTo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastNameFrom")
    public String lastNameFrom;
    public CorridorPathParams withLastNameFrom(String lastNameFrom) {
        this.lastNameFrom = lastNameFrom;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastNameTo")
    public String lastNameTo;
    public CorridorPathParams withLastNameTo(String lastNameTo) {
        this.lastNameTo = lastNameTo;
        return this;
    }
}