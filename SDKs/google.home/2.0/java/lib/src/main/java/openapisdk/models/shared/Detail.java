package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Detail {
    @JsonProperty("icon_list")
    public IconList[] iconList;
    public Detail withIconList(IconList[] iconList) {
        this.iconList = iconList;
        return this;
    }
    @JsonProperty("locale")
    public Locale locale;
    public Detail withLocale(Locale locale) {
        this.locale = locale;
        return this;
    }
    @JsonProperty("timezone")
    public Timezone timezone;
    public Detail withTimezone(Timezone timezone) {
        this.timezone = timezone;
        return this;
    }
}