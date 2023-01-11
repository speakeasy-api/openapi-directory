package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EpisodeObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject - Find more info on the official Spotify Web API Reference
**/
public class EpisodeObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_preview_url")
    public String audioPreviewUrl;
    public EpisodeObject withAudioPreviewUrl(String audioPreviewUrl) {
        this.audioPreviewUrl = audioPreviewUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EpisodeObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_ms")
    public Integer durationMs;
    public EpisodeObject withDurationMs(Integer durationMs) {
        this.durationMs = durationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit")
    public Boolean explicit;
    public EpisodeObject withExplicit(Boolean explicit) {
        this.explicit = explicit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public EpisodeObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public EpisodeObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_description")
    public String htmlDescription;
    public EpisodeObject withHtmlDescription(String htmlDescription) {
        this.htmlDescription = htmlDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EpisodeObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public EpisodeObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_externally_hosted")
    public Boolean isExternallyHosted;
    public EpisodeObject withIsExternallyHosted(Boolean isExternallyHosted) {
        this.isExternallyHosted = isExternallyHosted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_playable")
    public Boolean isPlayable;
    public EpisodeObject withIsPlayable(Boolean isPlayable) {
        this.isPlayable = isPlayable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public EpisodeObject withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public EpisodeObject withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EpisodeObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date")
    public String releaseDate;
    public EpisodeObject withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date_precision")
    public String releaseDatePrecision;
    public EpisodeObject withReleaseDatePrecision(String releaseDatePrecision) {
        this.releaseDatePrecision = releaseDatePrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public EpisodeRestrictionObject restrictions;
    public EpisodeObject withRestrictions(EpisodeRestrictionObject restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume_point")
    public ResumePointObject resumePoint;
    public EpisodeObject withResumePoint(ResumePointObject resumePoint) {
        this.resumePoint = resumePoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show")
    public SimplifiedShowObject show;
    public EpisodeObject withShow(SimplifiedShowObject show) {
        this.show = show;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public EpisodeObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public EpisodeObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}