package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2SuggestQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientVisibility")
    public String clientVisibility;
    public GetDiscoveryV2SuggestQueryParams withClientVisibility(String clientVisibility) {
        this.clientVisibility = clientVisibility;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countryCode")
    public String countryCode;
    public GetDiscoveryV2SuggestQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geoPoint")
    public String geoPoint;
    public GetDiscoveryV2SuggestQueryParams withGeoPoint(String geoPoint) {
        this.geoPoint = geoPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeFuzzy")
    public GetDiscoveryV2SuggestIncludeFuzzyEnum includeFuzzy;
    public GetDiscoveryV2SuggestQueryParams withIncludeFuzzy(GetDiscoveryV2SuggestIncludeFuzzyEnum includeFuzzy) {
        this.includeFuzzy = includeFuzzy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2SuggestIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2SuggestQueryParams withIncludeLicensedContent(GetDiscoveryV2SuggestIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeSpellcheck")
    public GetDiscoveryV2SuggestIncludeSpellcheckEnum includeSpellcheck;
    public GetDiscoveryV2SuggestQueryParams withIncludeSpellcheck(GetDiscoveryV2SuggestIncludeSpellcheckEnum includeSpellcheck) {
        this.includeSpellcheck = includeSpellcheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTBA")
    public GetDiscoveryV2SuggestIncludeTbaEnum includeTBA;
    public GetDiscoveryV2SuggestQueryParams withIncludeTba(GetDiscoveryV2SuggestIncludeTbaEnum includeTBA) {
        this.includeTBA = includeTBA;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTBD")
    public GetDiscoveryV2SuggestIncludeTbdEnum includeTBD;
    public GetDiscoveryV2SuggestQueryParams withIncludeTbd(GetDiscoveryV2SuggestIncludeTbdEnum includeTBD) {
        this.includeTBD = includeTBD;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetDiscoveryV2SuggestQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latlong")
    public String latlong;
    public GetDiscoveryV2SuggestQueryParams withLatlong(String latlong) {
        this.latlong = latlong;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2SuggestQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public String radius;
    public GetDiscoveryV2SuggestQueryParams withRadius(String radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segmentId")
    public String segmentId;
    public GetDiscoveryV2SuggestQueryParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public GetDiscoveryV2SuggestQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public GetDiscoveryV2SuggestSourceEnum source;
    public GetDiscoveryV2SuggestQueryParams withSource(GetDiscoveryV2SuggestSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public GetDiscoveryV2SuggestUnitEnum unit;
    public GetDiscoveryV2SuggestQueryParams withUnit(GetDiscoveryV2SuggestUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}