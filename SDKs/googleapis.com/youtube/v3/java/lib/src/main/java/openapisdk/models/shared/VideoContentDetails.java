package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoContentDetails
 * Details about the content of a YouTube Video.
**/
public class VideoContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public VideoContentDetailsCaptionEnum caption;
    public VideoContentDetails withCaption(VideoContentDetailsCaptionEnum caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentRating")
    public ContentRating contentRating;
    public VideoContentDetails withContentRating(ContentRating contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryRestriction")
    public AccessPolicy countryRestriction;
    public VideoContentDetails withCountryRestriction(AccessPolicy countryRestriction) {
        this.countryRestriction = countryRestriction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public VideoContentDetailsDefinitionEnum definition;
    public VideoContentDetails withDefinition(VideoContentDetailsDefinitionEnum definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public String dimension;
    public VideoContentDetails withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public VideoContentDetails withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasCustomThumbnail")
    public Boolean hasCustomThumbnail;
    public VideoContentDetails withHasCustomThumbnail(Boolean hasCustomThumbnail) {
        this.hasCustomThumbnail = hasCustomThumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licensedContent")
    public Boolean licensedContent;
    public VideoContentDetails withLicensedContent(Boolean licensedContent) {
        this.licensedContent = licensedContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projection")
    public VideoContentDetailsProjectionEnum projection;
    public VideoContentDetails withProjection(VideoContentDetailsProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionRestriction")
    public VideoContentDetailsRegionRestriction regionRestriction;
    public VideoContentDetails withRegionRestriction(VideoContentDetailsRegionRestriction regionRestriction) {
        this.regionRestriction = regionRestriction;
        return this;
    }
}