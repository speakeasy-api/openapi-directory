package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberStructuredGeocodeExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countryCode")
    public String countryCode;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countrySecondarySubdivision")
    public String countrySecondarySubdivision;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withCountrySecondarySubdivision(String countrySecondarySubdivision) {
        this.countrySecondarySubdivision = countrySecondarySubdivision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countrySubdivision")
    public String countrySubdivision;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withCountrySubdivision(String countrySubdivision) {
        this.countrySubdivision = countrySubdivision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countryTertiarySubdivision")
    public String countryTertiarySubdivision;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withCountryTertiarySubdivision(String countryTertiarySubdivision) {
        this.countryTertiarySubdivision = countryTertiarySubdivision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=crossStreet")
    public String crossStreet;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withCrossStreet(String crossStreet) {
        this.crossStreet = crossStreet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=municipality")
    public String municipality;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withMunicipality(String municipality) {
        this.municipality = municipality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=municipalitySubdivision")
    public String municipalitySubdivision;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withMunicipalitySubdivision(String municipalitySubdivision) {
        this.municipalitySubdivision = municipalitySubdivision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ofs")
    public Long ofs;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withOfs(Long ofs) {
        this.ofs = ofs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=postalCode")
    public String postalCode;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetName")
    public String streetName;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetNumber")
    public String streetNumber;
    public GetSearchVersionNumberStructuredGeocodeExtQueryParams withStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }
}