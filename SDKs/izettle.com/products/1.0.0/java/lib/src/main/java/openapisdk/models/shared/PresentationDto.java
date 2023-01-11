package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresentationDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public String backgroundColor;
    public PresentationDto withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public PresentationDto withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textColor")
    public String textColor;
    public PresentationDto withTextColor(String textColor) {
        this.textColor = textColor;
        return this;
    }
}