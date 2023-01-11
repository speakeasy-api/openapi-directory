package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyEmbedLogos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public EditVideoRequestBodyEmbedLogosCustom custom;
    public EditVideoRequestBodyEmbedLogos withCustom(EditVideoRequestBodyEmbedLogosCustom custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vimeo")
    public Boolean vimeo;
    public EditVideoRequestBodyEmbedLogos withVimeo(Boolean vimeo) {
        this.vimeo = vimeo;
        return this;
    }
}