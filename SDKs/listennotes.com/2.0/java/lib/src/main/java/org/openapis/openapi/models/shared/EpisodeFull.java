/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EpisodeFull - OK
 */
public class EpisodeFull {
    /**
     * Audio url of this episode, which can be played directly.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;

    public EpisodeFull withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    
    /**
     * Audio length of this episode. In seconds.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_length_sec")
    public Long audioLengthSec;

    public EpisodeFull withAudioLengthSec(Long audioLengthSec) {
        this.audioLengthSec = audioLengthSec;
        return this;
    }
    
    /**
     * Html of this episode's full description
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public EpisodeFull withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Whether this podcast contains explicit language.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;

    public EpisodeFull withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    
    /**
     * Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public EpisodeFull withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Image url for this episode.
     * If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
     * If you are using PRO/ENTERPRISE plan, then it's
     * a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
     * low resolution image (300x300).
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;

    public EpisodeFull withImage(String image) {
        this.image = image;
        return this;
    }
    
    /**
     * Web link of this episode.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;

    public EpisodeFull withLink(String link) {
        this.link = link;
        return this;
    }
    
    /**
     * Edit url of this episode where you can update the audio url if you find the audio is broken.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_edit_url")
    public String listennotesEditUrl;

    public EpisodeFull withListennotesEditUrl(String listennotesEditUrl) {
        this.listennotesEditUrl = listennotesEditUrl;
        return this;
    }
    
    /**
     * The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;

    public EpisodeFull withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    
    /**
     * Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maybe_audio_invalid")
    public Boolean maybeAudioInvalid;

    public EpisodeFull withMaybeAudioInvalid(Boolean maybeAudioInvalid) {
        this.maybeAudioInvalid = maybeAudioInvalid;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcast")
    public PodcastSimple podcast;

    public EpisodeFull withPodcast(PodcastSimple podcast) {
        this.podcast = podcast;
        return this;
    }
    
    /**
     * Published date for this episode. In millisecond.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;

    public EpisodeFull withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    
    /**
     * Thumbnail image (300x300) url for this episode.
     * If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;

    public EpisodeFull withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    
    /**
     * Episode name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public EpisodeFull withTitle(String title) {
        this.title = title;
        return this;
    }
    
    /**
     * The transcript of this episode, in plain text (with the newline character \n). If there's not transcript, it is null. This field is available only in the PRO/ENTERPRISE plan.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcript")
    public String transcript;

    public EpisodeFull withTranscript(String transcript) {
        this.transcript = transcript;
        return this;
    }
    
    public EpisodeFull(){}
}
