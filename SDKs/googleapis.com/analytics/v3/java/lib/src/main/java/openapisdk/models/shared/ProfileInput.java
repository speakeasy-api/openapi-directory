package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileInput
 * JSON template for an Analytics view (profile).
**/
public class ProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public ProfileInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botFilteringEnabled")
    public Boolean botFilteringEnabled;
    public ProfileInput withBotFilteringEnabled(Boolean botFilteringEnabled) {
        this.botFilteringEnabled = botFilteringEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childLink")
    public ProfileChildLink childLink;
    public ProfileInput withChildLink(ProfileChildLink childLink) {
        this.childLink = childLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ProfileInput withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultPage")
    public String defaultPage;
    public ProfileInput withDefaultPage(String defaultPage) {
        this.defaultPage = defaultPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eCommerceTracking")
    public Boolean eCommerceTracking;
    public ProfileInput withECommerceTracking(Boolean eCommerceTracking) {
        this.eCommerceTracking = eCommerceTracking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedECommerceTracking")
    public Boolean enhancedECommerceTracking;
    public ProfileInput withEnhancedECommerceTracking(Boolean enhancedECommerceTracking) {
        this.enhancedECommerceTracking = enhancedECommerceTracking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeQueryParameters")
    public String excludeQueryParameters;
    public ProfileInput withExcludeQueryParameters(String excludeQueryParameters) {
        this.excludeQueryParameters = excludeQueryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ProfileInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProfileInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public ProfileParentLink parentLink;
    public ProfileInput withParentLink(ProfileParentLink parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSearchCategoryParameters")
    public String siteSearchCategoryParameters;
    public ProfileInput withSiteSearchCategoryParameters(String siteSearchCategoryParameters) {
        this.siteSearchCategoryParameters = siteSearchCategoryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSearchQueryParameters")
    public String siteSearchQueryParameters;
    public ProfileInput withSiteSearchQueryParameters(String siteSearchQueryParameters) {
        this.siteSearchQueryParameters = siteSearchQueryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public ProfileInput withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripSiteSearchCategoryParameters")
    public Boolean stripSiteSearchCategoryParameters;
    public ProfileInput withStripSiteSearchCategoryParameters(Boolean stripSiteSearchCategoryParameters) {
        this.stripSiteSearchCategoryParameters = stripSiteSearchCategoryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripSiteSearchQueryParameters")
    public Boolean stripSiteSearchQueryParameters;
    public ProfileInput withStripSiteSearchQueryParameters(Boolean stripSiteSearchQueryParameters) {
        this.stripSiteSearchQueryParameters = stripSiteSearchQueryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public ProfileInput withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ProfileInput withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public ProfileInput withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}