package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YouTubeVideo
 * YouTube video item.
**/
public class YouTubeVideo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public YouTubeVideo withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public YouTubeVideo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUrl")
    public String thumbnailUrl;
    public YouTubeVideo withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public YouTubeVideo withTitle(String title) {
        this.title = title;
        return this;
    }
}