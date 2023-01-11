package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediaItem
 * A single media item.
**/
public class MediaItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribution")
    public Attribution attribution;
    public MediaItem withAttribution(Attribution attribution) {
        this.attribution = attribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public MediaItem withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRef")
    public MediaItemDataRef dataRef;
    public MediaItem withDataRef(MediaItemDataRef dataRef) {
        this.dataRef = dataRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MediaItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public MediaItem withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleUrl")
    public String googleUrl;
    public MediaItem withGoogleUrl(String googleUrl) {
        this.googleUrl = googleUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insights")
    public MediaInsights insights;
    public MediaItem withInsights(MediaInsights insights) {
        this.insights = insights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationAssociation")
    public LocationAssociation locationAssociation;
    public MediaItem withLocationAssociation(LocationAssociation locationAssociation) {
        this.locationAssociation = locationAssociation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaFormat")
    public MediaItemMediaFormatEnum mediaFormat;
    public MediaItem withMediaFormat(MediaItemMediaFormatEnum mediaFormat) {
        this.mediaFormat = mediaFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MediaItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUrl")
    public String sourceUrl;
    public MediaItem withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUrl")
    public String thumbnailUrl;
    public MediaItem withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
}