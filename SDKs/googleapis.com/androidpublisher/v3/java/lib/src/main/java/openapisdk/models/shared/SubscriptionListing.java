package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionListing
 * The consumer-visible metadata of a subscription.
**/
public class SubscriptionListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefits")
    public String[] benefits;
    public SubscriptionListing withBenefits(String[] benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SubscriptionListing withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public SubscriptionListing withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SubscriptionListing withTitle(String title) {
        this.title = title;
        return this;
    }
}