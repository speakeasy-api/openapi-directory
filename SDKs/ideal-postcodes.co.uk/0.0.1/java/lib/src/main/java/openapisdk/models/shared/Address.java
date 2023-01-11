package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administrative_county")
    public String administrativeCounty;
    public Address withAdministrativeCounty(String administrativeCounty) {
        this.administrativeCounty = administrativeCounty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("building_name")
    public String buildingName;
    public Address withBuildingName(String buildingName) {
        this.buildingName = buildingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("building_number")
    public String buildingNumber;
    public Address withBuildingNumber(String buildingNumber) {
        this.buildingNumber = buildingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Address withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public Address withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_point_suffix")
    public String deliveryPointSuffix;
    public Address withDeliveryPointSuffix(String deliveryPointSuffix) {
        this.deliveryPointSuffix = deliveryPointSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department_name")
    public String departmentName;
    public Address withDepartmentName(String departmentName) {
        this.departmentName = departmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependent_locality")
    public String dependentLocality;
    public Address withDependentLocality(String dependentLocality) {
        this.dependentLocality = dependentLocality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependent_thoroughfare")
    public String dependentThoroughfare;
    public Address withDependentThoroughfare(String dependentThoroughfare) {
        this.dependentThoroughfare = dependentThoroughfare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public Address withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("double_dependent_locality")
    public String doubleDependentLocality;
    public Address withDoubleDependentLocality(String doubleDependentLocality) {
        this.doubleDependentLocality = doubleDependentLocality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eastings")
    public Integer eastings;
    public Address withEastings(Integer eastings) {
        this.eastings = eastings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public Address withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_1")
    public String line1;
    public Address withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_2")
    public String line2;
    public Address withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_3")
    public String line3;
    public Address withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public Address withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("northings")
    public Integer northings;
    public Address withNorthings(Integer northings) {
        this.northings = northings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organisation_name")
    public String organisationName;
    public Address withOrganisationName(String organisationName) {
        this.organisationName = organisationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("po_box")
    public String poBox;
    public Address withPoBox(String poBox) {
        this.poBox = poBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_town")
    public String postTown;
    public Address withPostTown(String postTown) {
        this.postTown = postTown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_county")
    public String postalCounty;
    public Address withPostalCounty(String postalCounty) {
        this.postalCounty = postalCounty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode")
    public String postcode;
    public Address withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode_inward")
    public String postcodeInward;
    public Address withPostcodeInward(String postcodeInward) {
        this.postcodeInward = postcodeInward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode_outward")
    public String postcodeOutward;
    public Address withPostcodeOutward(String postcodeOutward) {
        this.postcodeOutward = postcodeOutward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode_type")
    public PostcodeTypeEnum postcodeType;
    public Address withPostcodeType(PostcodeTypeEnum postcodeType) {
        this.postcodeType = postcodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premise")
    public String premise;
    public Address withPremise(String premise) {
        this.premise = premise;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("su_organisation_indicator")
    public String suOrganisationIndicator;
    public Address withSuOrganisationIndicator(String suOrganisationIndicator) {
        this.suOrganisationIndicator = suOrganisationIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_building_name")
    public String subBuildingName;
    public Address withSubBuildingName(String subBuildingName) {
        this.subBuildingName = subBuildingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thoroughfare")
    public String thoroughfare;
    public Address withThoroughfare(String thoroughfare) {
        this.thoroughfare = thoroughfare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traditional_county")
    public String traditionalCounty;
    public Address withTraditionalCounty(String traditionalCounty) {
        this.traditionalCounty = traditionalCounty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("udprn")
    public Integer udprn;
    public Address withUdprn(Integer udprn) {
        this.udprn = udprn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("umprn")
    public String umprn;
    public Address withUmprn(String umprn) {
        this.umprn = umprn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ward")
    public String ward;
    public Address withWard(String ward) {
        this.ward = ward;
        return this;
    }
}