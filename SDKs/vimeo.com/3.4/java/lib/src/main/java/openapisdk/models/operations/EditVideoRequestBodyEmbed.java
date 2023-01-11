package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyEmbed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buttons")
    public EditVideoRequestBodyEmbedButtons buttons;
    public EditVideoRequestBodyEmbed withButtons(EditVideoRequestBodyEmbedButtons buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public EditVideoRequestBodyEmbed withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logos")
    public EditVideoRequestBodyEmbedLogos logos;
    public EditVideoRequestBodyEmbed withLogos(EditVideoRequestBodyEmbedLogos logos) {
        this.logos = logos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playbar")
    public Boolean playbar;
    public EditVideoRequestBodyEmbed withPlaybar(Boolean playbar) {
        this.playbar = playbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public EditVideoRequestBodyEmbedTitle title;
    public EditVideoRequestBodyEmbed withTitle(EditVideoRequestBodyEmbedTitle title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Boolean volume;
    public EditVideoRequestBodyEmbed withVolume(Boolean volume) {
        this.volume = volume;
        return this;
    }
}