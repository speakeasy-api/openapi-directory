package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormInput
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
public class FormInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public InfoInput info;
    public FormInput withInfo(InfoInput info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ItemInput[] items;
    public FormInput withItems(ItemInput[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public FormSettings settings;
    public FormInput withSettings(FormSettings settings) {
        this.settings = settings;
        return this;
    }
}