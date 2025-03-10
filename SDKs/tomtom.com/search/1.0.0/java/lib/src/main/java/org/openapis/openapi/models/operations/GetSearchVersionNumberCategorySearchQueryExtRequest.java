/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberCategorySearchQueryExtRequest {
    /**
     * Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=btmRight")
    public String btmRight;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withBtmRight(String btmRight) {
        this.btmRight = btmRight;
        return this;
    }
    
    /**
     * Comma separated string of country codes. This will limit the search to the specified countries.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countrySet")
    public String countrySet;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withCountrySet(String countrySet) {
        this.countrySet = countrySet;
        return this;
    }
    
    /**
     * Expected response format.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public org.openapis.openapi.models.shared.ExtEnum ext;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withExt(org.openapis.openapi.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    
    /**
     * Indexes for which extended postal codes should be included in the results. Available indexes are:
     *   - &lt;b&gt;Addr&lt;/b&gt; = Address ranges
     *   - &lt;b&gt;Geo&lt;/b&gt; = Geographies
     *   - &lt;b&gt;PAD&lt;/b&gt; = Point Addresses
     *   - &lt;b&gt;POI&lt;/b&gt; = Points of Interest
     *   - &lt;b&gt;Str&lt;/b&gt; = Streets
     *   - &lt;b&gt;XStr&lt;/b&gt; = Cross Streets (intersections)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    
    /**
     * Language in which search results should be returned. Should be one of &lt;a href="/search-api/search-api-documentation/supported-languages"&gt;supported IETF language tags&lt;/a&gt;, case insensitive.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    
    /**
     * Latitude where results should be biased.
     * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    
    /**
     * Maximum number of search results that will be returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * Longitude where results should be biased
     * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lon")
    public Float lon;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    
    /**
     * Starting offset of the returned results within the full result set.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ofs")
    public Long ofs;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withOfs(Long ofs) {
        this.ofs = ofs;
        return this;
    }
    
    /**
     * Query string. Must be properly URL encoded.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    
    /**
     * If radius &lt;b&gt;and&lt;/b&gt; position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    
    /**
     * Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topLeft")
    public String topLeft;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withTopLeft(String topLeft) {
        this.topLeft = topLeft;
        return this;
    }
    
    /**
     * If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter &lt;b&gt;predictive&lt;/b&gt; mode.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=typeahead")
    public Boolean typeahead;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withTypeahead(Boolean typeahead) {
        this.typeahead = typeahead;
        return this;
    }
    
    /**
     * Service version number. The current value is 2.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public org.openapis.openapi.models.shared.VersionNumberEnum versionNumber;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withVersionNumber(org.openapis.openapi.models.shared.VersionNumberEnum versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    
    /**
     * Geopolitical View.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public org.openapis.openapi.models.shared.ViewEnum view;

    public GetSearchVersionNumberCategorySearchQueryExtRequest withView(org.openapis.openapi.models.shared.ViewEnum view) {
        this.view = view;
        return this;
    }
    
    public GetSearchVersionNumberCategorySearchQueryExtRequest(@JsonProperty("ext") org.openapis.openapi.models.shared.ExtEnum ext, @JsonProperty("query") String query, @JsonProperty("versionNumber") org.openapis.openapi.models.shared.VersionNumberEnum versionNumber) {
        this.ext = ext;
        this.query = query;
        this.versionNumber = versionNumber;
  }
}
