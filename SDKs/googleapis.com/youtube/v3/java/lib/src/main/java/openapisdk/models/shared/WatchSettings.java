package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WatchSettings
 * Branding properties for the watch. All deprecated.
**/
public class WatchSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public String backgroundColor;
    public WatchSettings withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredPlaylistId")
    public String featuredPlaylistId;
    public WatchSettings withFeaturedPlaylistId(String featuredPlaylistId) {
        this.featuredPlaylistId = featuredPlaylistId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textColor")
    public String textColor;
    public WatchSettings withTextColor(String textColor) {
        this.textColor = textColor;
        return this;
    }
}