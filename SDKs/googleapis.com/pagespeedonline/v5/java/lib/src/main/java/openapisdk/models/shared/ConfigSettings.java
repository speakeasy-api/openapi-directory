package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigSettings
 * Message containing the configuration settings for the Lighthouse run.
**/
public class ConfigSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public ConfigSettings withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emulatedFormFactor")
    public String emulatedFormFactor;
    public ConfigSettings withEmulatedFormFactor(String emulatedFormFactor) {
        this.emulatedFormFactor = emulatedFormFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public String formFactor;
    public ConfigSettings withFormFactor(String formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public ConfigSettings withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onlyCategories")
    public Object onlyCategories;
    public ConfigSettings withOnlyCategories(Object onlyCategories) {
        this.onlyCategories = onlyCategories;
        return this;
    }
}