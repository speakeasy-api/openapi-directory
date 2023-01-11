package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsAddressesOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addressString")
    public String addressString;
    public GetOccupantsAddressesOutputFormatQueryParams withAddressString(String addressString) {
        this.addressString = addressString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoComplete")
    public Boolean autoComplete;
    public GetOccupantsAddressesOutputFormatQueryParams withAutoComplete(Boolean autoComplete) {
        this.autoComplete = autoComplete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetOccupantsAddressesOutputFormatQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetOccupantsAddressesOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=centre")
    public String centre;
    public GetOccupantsAddressesOutputFormatQueryParams withCentre(String centre) {
        this.centre = centre;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=civicNumber")
    public String civicNumber;
    public GetOccupantsAddressesOutputFormatQueryParams withCivicNumber(String civicNumber) {
        this.civicNumber = civicNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=civicNumberSuffix")
    public String civicNumberSuffix;
    public GetOccupantsAddressesOutputFormatQueryParams withCivicNumberSuffix(String civicNumberSuffix) {
        this.civicNumberSuffix = civicNumberSuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=echo")
    public Boolean echo;
    public GetOccupantsAddressesOutputFormatQueryParams withEcho(Boolean echo) {
        this.echo = echo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extrapolate")
    public Boolean extrapolate;
    public GetOccupantsAddressesOutputFormatQueryParams withExtrapolate(Boolean extrapolate) {
        this.extrapolate = extrapolate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interpolation")
    public GetOccupantsAddressesOutputFormatInterpolationEnum interpolation;
    public GetOccupantsAddressesOutputFormatQueryParams withInterpolation(GetOccupantsAddressesOutputFormatInterpolationEnum interpolation) {
        this.interpolation = interpolation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=localities")
    public String localities;
    public GetOccupantsAddressesOutputFormatQueryParams withLocalities(String localities) {
        this.localities = localities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=localityName")
    public String localityName;
    public GetOccupantsAddressesOutputFormatQueryParams withLocalityName(String localityName) {
        this.localityName = localityName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetOccupantsAddressesOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetOccupantsAddressesOutputFormatQueryParams withLocationDescriptor(GetOccupantsAddressesOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=matchPrecision")
    public String matchPrecision;
    public GetOccupantsAddressesOutputFormatQueryParams withMatchPrecision(String matchPrecision) {
        this.matchPrecision = matchPrecision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=matchPrecisionNot")
    public String matchPrecisionNot;
    public GetOccupantsAddressesOutputFormatQueryParams withMatchPrecisionNot(String matchPrecisionNot) {
        this.matchPrecisionNot = matchPrecisionNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Double maxDistance;
    public GetOccupantsAddressesOutputFormatQueryParams withMaxDistance(Double maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetOccupantsAddressesOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minScore")
    public Long minScore;
    public GetOccupantsAddressesOutputFormatQueryParams withMinScore(Long minScore) {
        this.minScore = minScore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notLocalities")
    public String notLocalities;
    public GetOccupantsAddressesOutputFormatQueryParams withNotLocalities(String notLocalities) {
        this.notLocalities = notLocalities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetOccupantsAddressesOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parcelPoint")
    public String parcelPoint;
    public GetOccupantsAddressesOutputFormatQueryParams withParcelPoint(String parcelPoint) {
        this.parcelPoint = parcelPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provinceCode")
    public String provinceCode;
    public GetOccupantsAddressesOutputFormatQueryParams withProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetOccupantsAddressesOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteName")
    public String siteName;
    public GetOccupantsAddressesOutputFormatQueryParams withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetDirection")
    public GetOccupantsAddressesOutputFormatStreetDirectionEnum streetDirection;
    public GetOccupantsAddressesOutputFormatQueryParams withStreetDirection(GetOccupantsAddressesOutputFormatStreetDirectionEnum streetDirection) {
        this.streetDirection = streetDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetName")
    public String streetName;
    public GetOccupantsAddressesOutputFormatQueryParams withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetQualifier")
    public String streetQualifier;
    public GetOccupantsAddressesOutputFormatQueryParams withStreetQualifier(String streetQualifier) {
        this.streetQualifier = streetQualifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=streetType")
    public String streetType;
    public GetOccupantsAddressesOutputFormatQueryParams withStreetType(String streetType) {
        this.streetType = streetType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GetOccupantsAddressesOutputFormatQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitDesignator")
    public GetOccupantsAddressesOutputFormatUnitDesignatorEnum unitDesignator;
    public GetOccupantsAddressesOutputFormatQueryParams withUnitDesignator(GetOccupantsAddressesOutputFormatUnitDesignatorEnum unitDesignator) {
        this.unitDesignator = unitDesignator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitNumber")
    public String unitNumber;
    public GetOccupantsAddressesOutputFormatQueryParams withUnitNumber(String unitNumber) {
        this.unitNumber = unitNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitNumberSuffix")
    public String unitNumberSuffix;
    public GetOccupantsAddressesOutputFormatQueryParams withUnitNumberSuffix(String unitNumberSuffix) {
        this.unitNumberSuffix = unitNumberSuffix;
        return this;
    }
}