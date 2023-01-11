package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Audio
 * Audio metadata
**/
public class Audio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_date")
    public LocalDate addedDate;
    public Audio withAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affiliate_url")
    public String affiliateUrl;
    public Audio withAffiliateUrl(String affiliateUrl) {
        this.affiliateUrl = affiliateUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album")
    public Album album;
    public Audio withAlbum(Album album) {
        this.album = album;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public Artist[] artists;
    public Audio withArtists(Artist[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public AudioAssets assets;
    public Audio withAssets(AudioAssets assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bpm")
    public Long bpm;
    public Audio withBpm(Long bpm) {
        this.bpm = bpm;
        return this;
    }
    @JsonProperty("contributor")
    public Contributor contributor;
    public Audio withContributor(Contributor contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deleted_time")
    public OffsetDateTime deletedTime;
    public Audio withDeletedTime(OffsetDateTime deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Audio withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Audio withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genres")
    public String[] genres;
    public Audio withGenres(String[] genres) {
        this.genres = genres;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Audio withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruments")
    public String[] instruments;
    public Audio withInstruments(String[] instruments) {
        this.instruments = instruments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_adult")
    public Boolean isAdult;
    public Audio withIsAdult(Boolean isAdult) {
        this.isAdult = isAdult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_instrumental")
    public Boolean isInstrumental;
    public Audio withIsInstrumental(Boolean isInstrumental) {
        this.isInstrumental = isInstrumental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isrc")
    public String isrc;
    public Audio withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public Audio withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public Audio withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lyrics")
    public String lyrics;
    public Audio withLyrics(String lyrics) {
        this.lyrics = lyrics;
        return this;
    }
    @JsonProperty("media_type")
    public String mediaType;
    public Audio withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_releases")
    public ModelRelease[] modelReleases;
    public Audio withModelReleases(ModelRelease[] modelReleases) {
        this.modelReleases = modelReleases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moods")
    public String[] moods;
    public Audio withMoods(String[] moods) {
        this.moods = moods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("published_time")
    public OffsetDateTime publishedTime;
    public Audio withPublishedTime(OffsetDateTime publishedTime) {
        this.publishedTime = publishedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_version")
    public String recordingVersion;
    public Audio withRecordingVersion(String recordingVersion) {
        this.recordingVersion = recordingVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releases")
    public String[] releases;
    public Audio withReleases(String[] releases) {
        this.releases = releases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("similar_artists")
    public Artist[] similarArtists;
    public Audio withSimilarArtists(Artist[] similarArtists) {
        this.similarArtists = similarArtists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("submitted_time")
    public OffsetDateTime submittedTime;
    public Audio withSubmittedTime(OffsetDateTime submittedTime) {
        this.submittedTime = submittedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Audio withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_time")
    public OffsetDateTime updatedTime;
    public Audio withUpdatedTime(OffsetDateTime updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Audio withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vocal_description")
    public String vocalDescription;
    public Audio withVocalDescription(String vocalDescription) {
        this.vocalDescription = vocalDescription;
        return this;
    }
}