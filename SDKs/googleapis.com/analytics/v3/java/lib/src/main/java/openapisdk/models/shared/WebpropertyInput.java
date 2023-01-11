package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebpropertyInput
 * JSON template for an Analytics web property.
**/
public class WebpropertyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public WebpropertyInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childLink")
    public WebpropertyChildLink childLink;
    public WebpropertyInput withChildLink(WebpropertyChildLink childLink) {
        this.childLink = childLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRetentionResetOnNewActivity")
    public Boolean dataRetentionResetOnNewActivity;
    public WebpropertyInput withDataRetentionResetOnNewActivity(Boolean dataRetentionResetOnNewActivity) {
        this.dataRetentionResetOnNewActivity = dataRetentionResetOnNewActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRetentionTtl")
    public String dataRetentionTtl;
    public WebpropertyInput withDataRetentionTtl(String dataRetentionTtl) {
        this.dataRetentionTtl = dataRetentionTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultProfileId")
    public String defaultProfileId;
    public WebpropertyInput withDefaultProfileId(String defaultProfileId) {
        this.defaultProfileId = defaultProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebpropertyInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industryVertical")
    public String industryVertical;
    public WebpropertyInput withIndustryVertical(String industryVertical) {
        this.industryVertical = industryVertical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebpropertyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public WebpropertyParentLink parentLink;
    public WebpropertyInput withParentLink(WebpropertyParentLink parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public WebpropertyInput withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public WebpropertyInput withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}