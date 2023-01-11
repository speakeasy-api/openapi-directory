package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Option
 * An option for a Choice question.
**/
public class Option {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goToAction")
    public OptionGoToActionEnum goToAction;
    public Option withGoToAction(OptionGoToActionEnum goToAction) {
        this.goToAction = goToAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goToSectionId")
    public String goToSectionId;
    public Option withGoToSectionId(String goToSectionId) {
        this.goToSectionId = goToSectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public Option withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOther")
    public Boolean isOther;
    public Option withIsOther(Boolean isOther) {
        this.isOther = isOther;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Option withValue(String value) {
        this.value = value;
        return this;
    }
}