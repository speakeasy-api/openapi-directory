/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * Page - The configuration for GitHub Pages for a repository.
 */
public class Page {
    /**
     * The process in which the Page will be built.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_type")
    public PageBuildTypeEnum buildType;

    public Page withBuildType(PageBuildTypeEnum buildType) {
        this.buildType = buildType;
        return this;
    }
    
    /**
     * The Pages site's custom domain
     */
    @JsonProperty("cname")
    public String cname;

    public Page withCname(String cname) {
        this.cname = cname;
        return this;
    }
    
    /**
     * Whether the Page has a custom 404 page.
     */
    @JsonProperty("custom_404")
    public Boolean custom404;

    public Page withCustom404(Boolean custom404) {
        this.custom404 = custom404;
        return this;
    }
    
    /**
     * The web address the Page can be accessed from.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;

    public Page withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("https_certificate")
    public PagesHttpsCertificate httpsCertificate;

    public Page withHttpsCertificate(PagesHttpsCertificate httpsCertificate) {
        this.httpsCertificate = httpsCertificate;
        return this;
    }
    
    /**
     * Whether https is enabled on the domain
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("https_enforced")
    public Boolean httpsEnforced;

    public Page withHttpsEnforced(Boolean httpsEnforced) {
        this.httpsEnforced = httpsEnforced;
        return this;
    }
    
    /**
     * The timestamp when a pending domain becomes unverified.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("pending_domain_unverified_at")
    public OffsetDateTime pendingDomainUnverifiedAt;

    public Page withPendingDomainUnverifiedAt(OffsetDateTime pendingDomainUnverifiedAt) {
        this.pendingDomainUnverifiedAt = pendingDomainUnverifiedAt;
        return this;
    }
    
    /**
     * The state if the domain is verified
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protected_domain_state")
    public PageProtectedDomainStateEnum protectedDomainState;

    public Page withProtectedDomainState(PageProtectedDomainStateEnum protectedDomainState) {
        this.protectedDomainState = protectedDomainState;
        return this;
    }
    
    /**
     * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
     */
    @JsonProperty("public")
    public Boolean public_;

    public Page withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public PagesSourceHash source;

    public Page withSource(PagesSourceHash source) {
        this.source = source;
        return this;
    }
    
    /**
     * The status of the most recent build of the Page.
     */
    @JsonProperty("status")
    public PageStatusEnum status;

    public Page withStatus(PageStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * The API address for accessing this Page resource.
     */
    @JsonProperty("url")
    public String url;

    public Page withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public Page(@JsonProperty("cname") String cname, @JsonProperty("custom_404") Boolean custom404, @JsonProperty("public") Boolean public_, @JsonProperty("status") PageStatusEnum status, @JsonProperty("url") String url) {
        this.cname = cname;
        this.custom404 = custom404;
        this.public_ = public_;
        this.status = status;
        this.url = url;
  }
}
