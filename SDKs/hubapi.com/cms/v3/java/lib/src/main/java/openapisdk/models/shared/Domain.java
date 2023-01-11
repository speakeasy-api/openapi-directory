package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctCname")
    public String correctCname;
    public Domain withCorrectCname(String correctCname) {
        this.correctCname = correctCname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Domain withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public Domain withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Domain withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("isResolving")
    public Boolean isResolving;
    public Domain withIsResolving(Boolean isResolving) {
        this.isResolving = isResolving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSslEnabled")
    public Boolean isSslEnabled;
    public Domain withIsSslEnabled(Boolean isSslEnabled) {
        this.isSslEnabled = isSslEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSslOnly")
    public Boolean isSslOnly;
    public Domain withIsSslOnly(Boolean isSslOnly) {
        this.isSslOnly = isSslOnly;
        return this;
    }
    @JsonProperty("isUsedForBlogPost")
    public Boolean isUsedForBlogPost;
    public Domain withIsUsedForBlogPost(Boolean isUsedForBlogPost) {
        this.isUsedForBlogPost = isUsedForBlogPost;
        return this;
    }
    @JsonProperty("isUsedForEmail")
    public Boolean isUsedForEmail;
    public Domain withIsUsedForEmail(Boolean isUsedForEmail) {
        this.isUsedForEmail = isUsedForEmail;
        return this;
    }
    @JsonProperty("isUsedForKnowledge")
    public Boolean isUsedForKnowledge;
    public Domain withIsUsedForKnowledge(Boolean isUsedForKnowledge) {
        this.isUsedForKnowledge = isUsedForKnowledge;
        return this;
    }
    @JsonProperty("isUsedForLandingPage")
    public Boolean isUsedForLandingPage;
    public Domain withIsUsedForLandingPage(Boolean isUsedForLandingPage) {
        this.isUsedForLandingPage = isUsedForLandingPage;
        return this;
    }
    @JsonProperty("isUsedForSitePage")
    public Boolean isUsedForSitePage;
    public Domain withIsUsedForSitePage(Boolean isUsedForSitePage) {
        this.isUsedForSitePage = isUsedForSitePage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manuallyMarkedAsResolving")
    public Boolean manuallyMarkedAsResolving;
    public Domain withManuallyMarkedAsResolving(Boolean manuallyMarkedAsResolving) {
        this.manuallyMarkedAsResolving = manuallyMarkedAsResolving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryBlogPost")
    public Boolean primaryBlogPost;
    public Domain withPrimaryBlogPost(Boolean primaryBlogPost) {
        this.primaryBlogPost = primaryBlogPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryEmail")
    public Boolean primaryEmail;
    public Domain withPrimaryEmail(Boolean primaryEmail) {
        this.primaryEmail = primaryEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryKnowledge")
    public Boolean primaryKnowledge;
    public Domain withPrimaryKnowledge(Boolean primaryKnowledge) {
        this.primaryKnowledge = primaryKnowledge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryLandingPage")
    public Boolean primaryLandingPage;
    public Domain withPrimaryLandingPage(Boolean primaryLandingPage) {
        this.primaryLandingPage = primaryLandingPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primarySitePage")
    public Boolean primarySitePage;
    public Domain withPrimarySitePage(Boolean primarySitePage) {
        this.primarySitePage = primarySitePage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryToDomain")
    public String secondaryToDomain;
    public Domain withSecondaryToDomain(String secondaryToDomain) {
        this.secondaryToDomain = secondaryToDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Domain withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
}