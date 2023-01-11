package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Playlist {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public PlaylistLinks links;
    public Playlist withLinks(PlaylistLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automation")
    public Boolean automation;
    public Playlist withAutomation(Boolean automation) {
        this.automation = automation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Playlist withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Playlist withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Playlist withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public Playlist withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_description")
    public String episodeDescription;
    public Playlist withEpisodeDescription(String episodeDescription) {
        this.episodeDescription = episodeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_name")
    public String episodeName;
    public Playlist withEpisodeName(String episodeName) {
        this.episodeName = episodeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_dj")
    public Boolean hideDj;
    public Playlist withHideDj(Boolean hideDj) {
        this.hideDj = hideDj;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Playlist withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Playlist withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persona_id")
    public Long personaId;
    public Playlist withPersonaId(Long personaId) {
        this.personaId = personaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_id")
    public Long showId;
    public Playlist withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("since")
    public Long since;
    public Playlist withSince(Long since) {
        this.since = since;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public Playlist withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Playlist withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Playlist withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Playlist withUrl(String url) {
        this.url = url;
        return this;
    }
}