package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExplicitContentSettingsObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-explicitcontentsettingsobject - Find more info on the official Spotify Web API Reference
**/
public class ExplicitContentSettingsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_enabled")
    public Boolean filterEnabled;
    public ExplicitContentSettingsObject withFilterEnabled(Boolean filterEnabled) {
        this.filterEnabled = filterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_locked")
    public Boolean filterLocked;
    public ExplicitContentSettingsObject withFilterLocked(Boolean filterLocked) {
        this.filterLocked = filterLocked;
        return this;
    }
}