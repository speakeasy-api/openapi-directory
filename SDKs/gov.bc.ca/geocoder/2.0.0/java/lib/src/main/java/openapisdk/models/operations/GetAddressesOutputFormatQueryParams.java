package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressesOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addressString")
    public String addressString;
    public GetAddressesOutputFormatQueryParams withAddressString(String addressString) {
        this.addressString = addressString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoComplete")
    public Boolean autoComplete;
    public GetAddressesOutputFormatQueryParams withAutoComplete(Boolean autoComplete) {
        this.autoComplete = autoComplete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetAddressesOutputFormatQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetAddressesOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=centre")
    public String centre;
    public GetAddressesOutputFormatQueryParams withCentre(String centre) {
        this.centre = centre;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=civicNumber")
    public String civicNumber;
    public GetAddressesOutputFormatQueryParams withCivicNumber(String civicNumber) {
        this.civicNumber = civicNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=civicNumberSuffix")
    public String civicNumberSuffix;
    public GetAddressesOutputFormatQueryParams withCivicNumberSuffix(String civicNumberSuffix) {
        this.civicNumberSuffix = civicNumberSuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=echo")
    public Boolean echo;
    public GetAddressesOutputFormatQueryParams withEcho(Boolean echo) {
        this.echo = echo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extrapolate")
    public Boolean extrapolate;
    public GetAddressesOutputFormatQueryParams withExtrapolate(Boolean extrapolate) {
        this.extrapolate = extrapolate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interpolation")
    public GetAddressesOutputFormatInterpolationEnum interpolation;
    public GetAddressesOutputFormatQueryParams withInterpolation(GetAddressesOutputFormatInterpolationEnum interpolation) {
        this.interpolation = interpolation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=localities")
    public String localities;
    public GetAddressesOutputFormatQueryParams withLocalities(String localities) {
        this.localities = localities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=localityName")
    public String localityName;
    public GetAddressesOutputFormatQueryParams withLocalityName(String localityName) {
        this.localityName = localityName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetAddressesOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetAddressesOutputFormatQueryParams withLocationDescriptor(GetAddressesOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=matchPrecision")
    public String matchPrecision;
    public GetAddressesOutputFormatQueryParams withMatchPrecision(String matchPrecision) {
        this.matchPrecision = matchPrecision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=matchPrecisionNot")
    public String matchPrecisionNot;
    public GetAddressesOutputFormatQueryParams withMatchPrecisionNot(String matchPrecisionNot) {
        this.matchPrecisionNot = matchPrecisionNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Double maxDistance;
    public GetAddressesOutputFormatQueryParams withMaxDistance(Double maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetAddressesOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minScore")
    public Long minScore;
    public GetAddressesOutputFormatQueryParams withMinScore(Long minScore) {
        this.minScore = minScore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notLocalities")
    public String notLocalities;
    public GetAddressesOutputFormatQueryParams withNotLocalities(String notLocalities) {
        this.notLocalities = notLocalities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetAddressesOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parcelPoint")
    public String parcelPoint;
    public GetAddressesOutputFormatQueryParams withParcelPoint(String parcelPoint) {
        this.parcelPoint = parcelPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provinceCode")
    public String provinceCode;
    public GetAddressesOutputFormatQueryParams withProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetAddressesOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteName")
    public String siteName;
    public GetAddressesOutputFormatQueryParams withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetDirection")
    public GetAddressesOutputFormatStreetDirectionEnum streetDirection;
    public GetAddressesOutputFormatQueryParams withStreetDirection(GetAddressesOutputFormatStreetDirectionEnum streetDirection) {
        this.streetDirection = streetDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetName")
    public String streetName;
    public GetAddressesOutputFormatQueryParams withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetQualifier")
    public String streetQualifier;
    public GetAddressesOutputFormatQueryParams withStreetQualifier(String streetQualifier) {
        this.streetQualifier = streetQualifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetType")
    public String streetType;
    public GetAddressesOutputFormatQueryParams withStreetType(String streetType) {
        this.streetType = streetType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitDesignator")
    public GetAddressesOutputFormatUnitDesignatorEnum unitDesignator;
    public GetAddressesOutputFormatQueryParams withUnitDesignator(GetAddressesOutputFormatUnitDesignatorEnum unitDesignator) {
        this.unitDesignator = unitDesignator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitNumber")
    public String unitNumber;
    public GetAddressesOutputFormatQueryParams withUnitNumber(String unitNumber) {
        this.unitNumber = unitNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitNumberSuffix")
    public String unitNumberSuffix;
    public GetAddressesOutputFormatQueryParams withUnitNumberSuffix(String unitNumberSuffix) {
        this.unitNumberSuffix = unitNumberSuffix;
        return this;
    }
}