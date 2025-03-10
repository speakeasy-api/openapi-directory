/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest {
    /**
     * Expected response format.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public org.openapis.openapi.models.shared.ExtEnum ext;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withExt(org.openapis.openapi.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    
    /**
     * The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=heading")
    public Float heading;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withHeading(Float heading) {
        this.heading = heading;
        return this;
    }
    
    /**
     * Language in which search results should be returned. Should be one of &lt;a href="/search-api/search-api-documentation/supported-languages"&gt;supported IETF language tags&lt;/a&gt;, case insensitive.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    
    /**
     * Maximum number of cross-streets to return.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * This is specified as a comma separated string composed of lat., lon.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public String position;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withPosition(String position) {
        this.position = position;
        return this;
    }
    
    /**
     * The maximum distance in meters from the specified position for the reverse geocoder to consider.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    
    /**
     * If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
     * @deprecated this field will be removed in a future release, please migrate away from it as soon as possible
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spatialKeys")
    @Deprecated
    public Boolean spatialKeys;

    @Deprecated
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withSpatialKeys(Boolean spatialKeys) {
        this.spatialKeys = spatialKeys;
        return this;
    }
    
    /**
     * Service version number. The current value is 2.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public org.openapis.openapi.models.shared.VersionNumberEnum versionNumber;

    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest withVersionNumber(org.openapis.openapi.models.shared.VersionNumberEnum versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest(@JsonProperty("ext") org.openapis.openapi.models.shared.ExtEnum ext, @JsonProperty("position") String position, @JsonProperty("versionNumber") org.openapis.openapi.models.shared.VersionNumberEnum versionNumber) {
        this.ext = ext;
        this.position = position;
        this.versionNumber = versionNumber;
  }
}
