package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptionInput
 * An option for a Choice question.
**/
public class OptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goToAction")
    public OptionGoToActionEnum goToAction;
    public OptionInput withGoToAction(OptionGoToActionEnum goToAction) {
        this.goToAction = goToAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goToSectionId")
    public String goToSectionId;
    public OptionInput withGoToSectionId(String goToSectionId) {
        this.goToSectionId = goToSectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ImageInput image;
    public OptionInput withImage(ImageInput image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOther")
    public Boolean isOther;
    public OptionInput withIsOther(Boolean isOther) {
        this.isOther = isOther;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public OptionInput withValue(String value) {
        this.value = value;
        return this;
    }
}