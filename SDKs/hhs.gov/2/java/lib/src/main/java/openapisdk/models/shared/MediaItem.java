package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MediaItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaigns")
    public Campaign[] campaigns;
    public MediaItem withCampaigns(Campaign[] campaigns) {
        this.campaigns = campaigns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public MediaItem withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributionUrl")
    public String customAttributionUrl;
    public MediaItem withCustomAttributionUrl(String customAttributionUrl) {
        this.customAttributionUrl = customAttributionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPreviewUrl")
    public String customPreviewUrl;
    public MediaItem withCustomPreviewUrl(String customPreviewUrl) {
        this.customPreviewUrl = customPreviewUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customThumbnailUrl")
    public String customThumbnailUrl;
    public MediaItem withCustomThumbnailUrl(String customThumbnailUrl) {
        this.customThumbnailUrl = customThumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateContentAuthored")
    public LocalDate dateContentAuthored;
    public MediaItem withDateContentAuthored(LocalDate dateContentAuthored) {
        this.dateContentAuthored = dateContentAuthored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateContentPublished")
    public LocalDate dateContentPublished;
    public MediaItem withDateContentPublished(LocalDate dateContentPublished) {
        this.dateContentPublished = dateContentPublished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateContentReviewed")
    public LocalDate dateContentReviewed;
    public MediaItem withDateContentReviewed(LocalDate dateContentReviewed) {
        this.dateContentReviewed = dateContentReviewed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateContentUpdated")
    public LocalDate dateContentUpdated;
    public MediaItem withDateContentUpdated(LocalDate dateContentUpdated) {
        this.dateContentUpdated = dateContentUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateSyndicationCaptured")
    public LocalDate dateSyndicationCaptured;
    public MediaItem withDateSyndicationCaptured(LocalDate dateSyndicationCaptured) {
        this.dateSyndicationCaptured = dateSyndicationCaptured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateSyndicationUpdated")
    public LocalDate dateSyndicationUpdated;
    public MediaItem withDateSyndicationUpdated(LocalDate dateSyndicationUpdated) {
        this.dateSyndicationUpdated = dateSyndicationUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateSyndicationVisible")
    public LocalDate dateSyndicationVisible;
    public MediaItem withDateSyndicationVisible(LocalDate dateSyndicationVisible) {
        this.dateSyndicationVisible = dateSyndicationVisible;
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
    @JsonProperty("extendedAttributes")
    public ExtendedAttribute[] extendedAttributes;
    public MediaItem withExtendedAttributes(ExtendedAttribute[] extendedAttributes) {
        this.extendedAttributes = extendedAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalGuid")
    public String externalGuid;
    public MediaItem withExternalGuid(String externalGuid) {
        this.externalGuid = externalGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foreignSyndicationAPIUrl")
    public String foreignSyndicationAPIUrl;
    public MediaItem withForeignSyndicationApiUrl(String foreignSyndicationAPIUrl) {
        this.foreignSyndicationAPIUrl = foreignSyndicationAPIUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public MediaItem withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public MediaItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public Language language;
    public MediaItem withLanguage(Language language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaType")
    public String mediaType;
    public MediaItem withMediaType(String mediaType) {
        this.mediaType = mediaType;
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
    @JsonProperty("source")
    public Source source;
    public MediaItem withSource(Source source) {
        this.source = source;
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
    @JsonProperty("targetUrl")
    public String targetUrl;
    public MediaItem withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}