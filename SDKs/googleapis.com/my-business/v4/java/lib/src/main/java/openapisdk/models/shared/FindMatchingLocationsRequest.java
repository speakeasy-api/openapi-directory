package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindMatchingLocationsRequest
 * Request message for Locations.FindMatchingLocations.
**/
public class FindMatchingLocationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public FindMatchingLocationsRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCacheDuration")
    public String maxCacheDuration;
    public FindMatchingLocationsRequest withMaxCacheDuration(String maxCacheDuration) {
        this.maxCacheDuration = maxCacheDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numResults")
    public Integer numResults;
    public FindMatchingLocationsRequest withNumResults(Integer numResults) {
        this.numResults = numResults;
        return this;
    }
}