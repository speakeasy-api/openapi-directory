package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyEmbedButtons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public Boolean embed;
    public EditVideoRequestBodyEmbedButtons withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullscreen")
    public Boolean fullscreen;
    public EditVideoRequestBodyEmbedButtons withFullscreen(Boolean fullscreen) {
        this.fullscreen = fullscreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hd")
    public Boolean hd;
    public EditVideoRequestBodyEmbedButtons withHd(Boolean hd) {
        this.hd = hd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("like")
    public Boolean like;
    public EditVideoRequestBodyEmbedButtons withLike(Boolean like) {
        this.like = like;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaling")
    public Boolean scaling;
    public EditVideoRequestBodyEmbedButtons withScaling(Boolean scaling) {
        this.scaling = scaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public Boolean share;
    public EditVideoRequestBodyEmbedButtons withShare(Boolean share) {
        this.share = share;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlater")
    public Boolean watchlater;
    public EditVideoRequestBodyEmbedButtons withWatchlater(Boolean watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}