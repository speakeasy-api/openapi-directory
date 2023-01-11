package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewLinksPullRequest {
    @JsonProperty("href")
    public String href;
    public PullRequestReviewLinksPullRequest withHref(String href) {
        this.href = href;
        return this;
    }
}