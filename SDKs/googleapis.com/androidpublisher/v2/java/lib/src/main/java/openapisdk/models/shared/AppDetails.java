package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactEmail")
    public String contactEmail;
    public AppDetails withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPhone")
    public String contactPhone;
    public AppDetails withContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactWebsite")
    public String contactWebsite;
    public AppDetails withContactWebsite(String contactWebsite) {
        this.contactWebsite = contactWebsite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public AppDetails withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
}