package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GeocodeAddressRequestBody {
    @SpeakeasyMetadata("form:name=address")
    public String address;
    public GeocodeAddressRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("form:name=city")
    public String city;
    public GeocodeAddressRequestBody withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("form:name=country-code")
    public String countryCode;
    public GeocodeAddressRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=county")
    public String county;
    public GeocodeAddressRequestBody withCounty(String county) {
        this.county = county;
        return this;
    }
    @SpeakeasyMetadata("form:name=fuzzy-search")
    public Boolean fuzzySearch;
    public GeocodeAddressRequestBody withFuzzySearch(Boolean fuzzySearch) {
        this.fuzzySearch = fuzzySearch;
        return this;
    }
    @SpeakeasyMetadata("form:name=house-number")
    public String houseNumber;
    public GeocodeAddressRequestBody withHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=language-code")
    public String languageCode;
    public GeocodeAddressRequestBody withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public GeocodeAddressRequestBodyOutputCaseEnum outputCase;
    public GeocodeAddressRequestBody withOutputCase(GeocodeAddressRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=postal-code")
    public String postalCode;
    public GeocodeAddressRequestBody withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=state")
    public String state;
    public GeocodeAddressRequestBody withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("form:name=street")
    public String street;
    public GeocodeAddressRequestBody withStreet(String street) {
        this.street = street;
        return this;
    }
}