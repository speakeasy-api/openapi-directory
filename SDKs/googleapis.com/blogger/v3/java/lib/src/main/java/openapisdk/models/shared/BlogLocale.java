package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlogLocale
 * The locale this Blog is set to.
**/
public class BlogLocale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public BlogLocale withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public BlogLocale withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variant")
    public String variant;
    public BlogLocale withVariant(String variant) {
        this.variant = variant;
        return this;
    }
}