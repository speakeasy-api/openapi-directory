package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2EventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=attractionId")
    public String attractionId;
    public GetDiscoveryV2EventsQueryParams withAttractionId(String attractionId) {
        this.attractionId = attractionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetDiscoveryV2EventsQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationId")
    public Object[] classificationId;
    public GetDiscoveryV2EventsQueryParams withClassificationId(Object[] classificationId) {
        this.classificationId = classificationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationName")
    public Object[] classificationName;
    public GetDiscoveryV2EventsQueryParams withClassificationName(Object[] classificationName) {
        this.classificationName = classificationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientVisibility")
    public String clientVisibility;
    public GetDiscoveryV2EventsQueryParams withClientVisibility(String clientVisibility) {
        this.clientVisibility = clientVisibility;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countryCode")
    public String countryCode;
    public GetDiscoveryV2EventsQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dmaId")
    public String dmaId;
    public GetDiscoveryV2EventsQueryParams withDmaId(String dmaId) {
        this.dmaId = dmaId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDateTime")
    public String endDateTime;
    public GetDiscoveryV2EventsQueryParams withEndDateTime(String endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geoPoint")
    public String geoPoint;
    public GetDiscoveryV2EventsQueryParams withGeoPoint(String geoPoint) {
        this.geoPoint = geoPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetDiscoveryV2EventsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2EventsIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2EventsQueryParams withIncludeLicensedContent(GetDiscoveryV2EventsIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeSpellcheck")
    public GetDiscoveryV2EventsIncludeSpellcheckEnum includeSpellcheck;
    public GetDiscoveryV2EventsQueryParams withIncludeSpellcheck(GetDiscoveryV2EventsIncludeSpellcheckEnum includeSpellcheck) {
        this.includeSpellcheck = includeSpellcheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTBA")
    public GetDiscoveryV2EventsIncludeTbaEnum includeTBA;
    public GetDiscoveryV2EventsQueryParams withIncludeTba(GetDiscoveryV2EventsIncludeTbaEnum includeTBA) {
        this.includeTBA = includeTBA;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTBD")
    public GetDiscoveryV2EventsIncludeTbdEnum includeTBD;
    public GetDiscoveryV2EventsQueryParams withIncludeTbd(GetDiscoveryV2EventsIncludeTbdEnum includeTBD) {
        this.includeTBD = includeTBD;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTest")
    public GetDiscoveryV2EventsIncludeTestEnum includeTest;
    public GetDiscoveryV2EventsQueryParams withIncludeTest(GetDiscoveryV2EventsIncludeTestEnum includeTest) {
        this.includeTest = includeTest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetDiscoveryV2EventsQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latlong")
    public String latlong;
    public GetDiscoveryV2EventsQueryParams withLatlong(String latlong) {
        this.latlong = latlong;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2EventsQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketId")
    public String marketId;
    public GetDiscoveryV2EventsQueryParams withMarketId(String marketId) {
        this.marketId = marketId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onsaleEndDateTime")
    public String onsaleEndDateTime;
    public GetDiscoveryV2EventsQueryParams withOnsaleEndDateTime(String onsaleEndDateTime) {
        this.onsaleEndDateTime = onsaleEndDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onsaleOnAfterStartDate")
    public String onsaleOnAfterStartDate;
    public GetDiscoveryV2EventsQueryParams withOnsaleOnAfterStartDate(String onsaleOnAfterStartDate) {
        this.onsaleOnAfterStartDate = onsaleOnAfterStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onsaleOnStartDate")
    public String onsaleOnStartDate;
    public GetDiscoveryV2EventsQueryParams withOnsaleOnStartDate(String onsaleOnStartDate) {
        this.onsaleOnStartDate = onsaleOnStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onsaleStartDateTime")
    public String onsaleStartDateTime;
    public GetDiscoveryV2EventsQueryParams withOnsaleStartDateTime(String onsaleStartDateTime) {
        this.onsaleStartDateTime = onsaleStartDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetDiscoveryV2EventsQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=postalCode")
    public String postalCode;
    public GetDiscoveryV2EventsQueryParams withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=promoterId")
    public String promoterId;
    public GetDiscoveryV2EventsQueryParams withPromoterId(String promoterId) {
        this.promoterId = promoterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public String radius;
    public GetDiscoveryV2EventsQueryParams withRadius(String radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segmentId")
    public String segmentId;
    public GetDiscoveryV2EventsQueryParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segmentName")
    public String segmentName;
    public GetDiscoveryV2EventsQueryParams withSegmentName(String segmentName) {
        this.segmentName = segmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public GetDiscoveryV2EventsQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDiscoveryV2EventsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public GetDiscoveryV2EventsSourceEnum source;
    public GetDiscoveryV2EventsQueryParams withSource(GetDiscoveryV2EventsSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDateTime")
    public String startDateTime;
    public GetDiscoveryV2EventsQueryParams withStartDateTime(String startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stateCode")
    public String stateCode;
    public GetDiscoveryV2EventsQueryParams withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public GetDiscoveryV2EventsUnitEnum unit;
    public GetDiscoveryV2EventsQueryParams withUnit(GetDiscoveryV2EventsUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=venueId")
    public String venueId;
    public GetDiscoveryV2EventsQueryParams withVenueId(String venueId) {
        this.venueId = venueId;
        return this;
    }
}