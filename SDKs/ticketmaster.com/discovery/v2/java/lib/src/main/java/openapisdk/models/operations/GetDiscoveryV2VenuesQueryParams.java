package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2VenuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countryCode")
    public String countryCode;
    public GetDiscoveryV2VenuesQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geoPoint")
    public String geoPoint;
    public GetDiscoveryV2VenuesQueryParams withGeoPoint(String geoPoint) {
        this.geoPoint = geoPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetDiscoveryV2VenuesQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2VenuesIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2VenuesQueryParams withIncludeLicensedContent(GetDiscoveryV2VenuesIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeSpellcheck")
    public GetDiscoveryV2VenuesIncludeSpellcheckEnum includeSpellcheck;
    public GetDiscoveryV2VenuesQueryParams withIncludeSpellcheck(GetDiscoveryV2VenuesIncludeSpellcheckEnum includeSpellcheck) {
        this.includeSpellcheck = includeSpellcheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTest")
    public GetDiscoveryV2VenuesIncludeTestEnum includeTest;
    public GetDiscoveryV2VenuesQueryParams withIncludeTest(GetDiscoveryV2VenuesIncludeTestEnum includeTest) {
        this.includeTest = includeTest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetDiscoveryV2VenuesQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latlong")
    public String latlong;
    public GetDiscoveryV2VenuesQueryParams withLatlong(String latlong) {
        this.latlong = latlong;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2VenuesQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetDiscoveryV2VenuesQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public String radius;
    public GetDiscoveryV2VenuesQueryParams withRadius(String radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public GetDiscoveryV2VenuesQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDiscoveryV2VenuesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public GetDiscoveryV2VenuesSourceEnum source;
    public GetDiscoveryV2VenuesQueryParams withSource(GetDiscoveryV2VenuesSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stateCode")
    public String stateCode;
    public GetDiscoveryV2VenuesQueryParams withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public GetDiscoveryV2VenuesUnitEnum unit;
    public GetDiscoveryV2VenuesQueryParams withUnit(GetDiscoveryV2VenuesUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}