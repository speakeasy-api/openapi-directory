package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BranchWithProtection
 * Branch With Protection
**/
public class BranchWithProtection {
    @JsonProperty("_links")
    public BranchWithProtectionLinks links;
    public BranchWithProtection withLinks(BranchWithProtectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("commit")
    public Commit commit;
    public BranchWithProtection withCommit(Commit commit) {
        this.commit = commit;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BranchWithProtection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pattern")
    public String pattern;
    public BranchWithProtection withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonProperty("protected")
    public Boolean protected_;
    public BranchWithProtection withProtected(Boolean protected_) {
        this.protected_ = protected_;
        return this;
    }
    @JsonProperty("protection")
    public BranchProtection protection;
    public BranchWithProtection withProtection(BranchProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("protection_url")
    public String protectionUrl;
    public BranchWithProtection withProtectionUrl(String protectionUrl) {
        this.protectionUrl = protectionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_approving_review_count")
    public Long requiredApprovingReviewCount;
    public BranchWithProtection withRequiredApprovingReviewCount(Long requiredApprovingReviewCount) {
        this.requiredApprovingReviewCount = requiredApprovingReviewCount;
        return this;
    }
}