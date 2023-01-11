package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserLocale
 * This user's locale
**/
public class UserLocale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public UserLocale withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UserLocale withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variant")
    public String variant;
    public UserLocale withVariant(String variant) {
        this.variant = variant;
        return this;
    }
}