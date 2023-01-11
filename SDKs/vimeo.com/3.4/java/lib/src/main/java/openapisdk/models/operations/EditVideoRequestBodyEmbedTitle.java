package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyEmbedTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public EditVideoRequestBodyEmbedTitleNameEnum name;
    public EditVideoRequestBodyEmbedTitle withName(EditVideoRequestBodyEmbedTitleNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public EditVideoRequestBodyEmbedTitleOwnerEnum owner;
    public EditVideoRequestBodyEmbedTitle withOwner(EditVideoRequestBodyEmbedTitleOwnerEnum owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portrait")
    public EditVideoRequestBodyEmbedTitlePortraitEnum portrait;
    public EditVideoRequestBodyEmbedTitle withPortrait(EditVideoRequestBodyEmbedTitlePortraitEnum portrait) {
        this.portrait = portrait;
        return this;
    }
}