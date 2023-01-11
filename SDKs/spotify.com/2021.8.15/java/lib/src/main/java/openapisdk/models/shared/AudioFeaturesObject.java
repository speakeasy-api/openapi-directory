package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioFeaturesObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject - Find more info on the official Spotify Web API Reference
**/
public class AudioFeaturesObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acousticness")
    public Double acousticness;
    public AudioFeaturesObject withAcousticness(Double acousticness) {
        this.acousticness = acousticness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysis_url")
    public String analysisUrl;
    public AudioFeaturesObject withAnalysisUrl(String analysisUrl) {
        this.analysisUrl = analysisUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("danceability")
    public Double danceability;
    public AudioFeaturesObject withDanceability(Double danceability) {
        this.danceability = danceability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_ms")
    public Integer durationMs;
    public AudioFeaturesObject withDurationMs(Integer durationMs) {
        this.durationMs = durationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energy")
    public Double energy;
    public AudioFeaturesObject withEnergy(Double energy) {
        this.energy = energy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AudioFeaturesObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instrumentalness")
    public Double instrumentalness;
    public AudioFeaturesObject withInstrumentalness(Double instrumentalness) {
        this.instrumentalness = instrumentalness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public Integer key;
    public AudioFeaturesObject withKey(Integer key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveness")
    public Double liveness;
    public AudioFeaturesObject withLiveness(Double liveness) {
        this.liveness = liveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loudness")
    public Double loudness;
    public AudioFeaturesObject withLoudness(Double loudness) {
        this.loudness = loudness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public Integer mode;
    public AudioFeaturesObject withMode(Integer mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechiness")
    public Double speechiness;
    public AudioFeaturesObject withSpeechiness(Double speechiness) {
        this.speechiness = speechiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempo")
    public Double tempo;
    public AudioFeaturesObject withTempo(Double tempo) {
        this.tempo = tempo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_signature")
    public Integer timeSignature;
    public AudioFeaturesObject withTimeSignature(Integer timeSignature) {
        this.timeSignature = timeSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_href")
    public String trackHref;
    public AudioFeaturesObject withTrackHref(String trackHref) {
        this.trackHref = trackHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AudioFeaturesObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public AudioFeaturesObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valence")
    public Double valence;
    public AudioFeaturesObject withValence(Double valence) {
        this.valence = valence;
        return this;
    }
}