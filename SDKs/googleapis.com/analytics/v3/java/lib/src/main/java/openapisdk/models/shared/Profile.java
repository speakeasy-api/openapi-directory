package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Profile
 * JSON template for an Analytics view (profile).
**/
public class Profile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Profile withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botFilteringEnabled")
    public Boolean botFilteringEnabled;
    public Profile withBotFilteringEnabled(Boolean botFilteringEnabled) {
        this.botFilteringEnabled = botFilteringEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childLink")
    public ProfileChildLink childLink;
    public Profile withChildLink(ProfileChildLink childLink) {
        this.childLink = childLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Profile withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Profile withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultPage")
    public String defaultPage;
    public Profile withDefaultPage(String defaultPage) {
        this.defaultPage = defaultPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eCommerceTracking")
    public Boolean eCommerceTracking;
    public Profile withECommerceTracking(Boolean eCommerceTracking) {
        this.eCommerceTracking = eCommerceTracking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedECommerceTracking")
    public Boolean enhancedECommerceTracking;
    public Profile withEnhancedECommerceTracking(Boolean enhancedECommerceTracking) {
        this.enhancedECommerceTracking = enhancedECommerceTracking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeQueryParameters")
    public String excludeQueryParameters;
    public Profile withExcludeQueryParameters(String excludeQueryParameters) {
        this.excludeQueryParameters = excludeQueryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Profile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalWebPropertyId")
    public String internalWebPropertyId;
    public Profile withInternalWebPropertyId(String internalWebPropertyId) {
        this.internalWebPropertyId = internalWebPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Profile withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Profile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public ProfileParentLink parentLink;
    public Profile withParentLink(ProfileParentLink parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public ProfilePermissions permissions;
    public Profile withPermissions(ProfilePermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Profile withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSearchCategoryParameters")
    public String siteSearchCategoryParameters;
    public Profile withSiteSearchCategoryParameters(String siteSearchCategoryParameters) {
        this.siteSearchCategoryParameters = siteSearchCategoryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSearchQueryParameters")
    public String siteSearchQueryParameters;
    public Profile withSiteSearchQueryParameters(String siteSearchQueryParameters) {
        this.siteSearchQueryParameters = siteSearchQueryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public Profile withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripSiteSearchCategoryParameters")
    public Boolean stripSiteSearchCategoryParameters;
    public Profile withStripSiteSearchCategoryParameters(Boolean stripSiteSearchCategoryParameters) {
        this.stripSiteSearchCategoryParameters = stripSiteSearchCategoryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripSiteSearchQueryParameters")
    public Boolean stripSiteSearchQueryParameters;
    public Profile withStripSiteSearchQueryParameters(Boolean stripSiteSearchQueryParameters) {
        this.stripSiteSearchQueryParameters = stripSiteSearchQueryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Profile withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Profile withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Profile withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public Profile withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public Profile withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}