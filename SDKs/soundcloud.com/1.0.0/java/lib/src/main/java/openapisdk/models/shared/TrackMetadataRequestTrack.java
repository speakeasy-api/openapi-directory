package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TrackMetadataRequestTrack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentable")
    public Boolean commentable;
    public TrackMetadataRequestTrack withCommentable(Boolean commentable) {
        this.commentable = commentable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TrackMetadataRequestTrack withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public Boolean downloadable;
    public TrackMetadataRequestTrack withDownloadable(Boolean downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable_by")
    public TrackMetadataRequestTrackEmbeddableByEnum embeddableBy;
    public TrackMetadataRequestTrack withEmbeddableBy(TrackMetadataRequestTrackEmbeddableByEnum embeddableBy) {
        this.embeddableBy = embeddableBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public TrackMetadataRequestTrack withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isrc")
    public String isrc;
    public TrackMetadataRequestTrack withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_name")
    public String labelName;
    public TrackMetadataRequestTrack withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public TrackMetadataRequestTrackLicenseEnum license;
    public TrackMetadataRequestTrack withLicense(TrackMetadataRequestTrackLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public TrackMetadataRequestTrack withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_url")
    public String purchaseUrl;
    public TrackMetadataRequestTrack withPurchaseUrl(String purchaseUrl) {
        this.purchaseUrl = purchaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public TrackMetadataRequestTrack withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date")
    public String releaseDate;
    public TrackMetadataRequestTrack withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public TrackMetadataRequestTrackSharingEnum sharing;
    public TrackMetadataRequestTrack withSharing(TrackMetadataRequestTrackSharingEnum sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamable")
    public Boolean streamable;
    public TrackMetadataRequestTrack withStreamable(Boolean streamable) {
        this.streamable = streamable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public TrackMetadataRequestTrack withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public TrackMetadataRequestTrack withTitle(String title) {
        this.title = title;
        return this;
    }
}