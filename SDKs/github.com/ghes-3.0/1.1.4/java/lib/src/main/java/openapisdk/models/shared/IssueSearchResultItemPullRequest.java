package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class IssueSearchResultItemPullRequest {
    @JsonProperty("diff_url")
    public String diffUrl;
    public IssueSearchResultItemPullRequest withDiffUrl(String diffUrl) {
        this.diffUrl = diffUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public IssueSearchResultItemPullRequest withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("merged_at")
    public OffsetDateTime mergedAt;
    public IssueSearchResultItemPullRequest withMergedAt(OffsetDateTime mergedAt) {
        this.mergedAt = mergedAt;
        return this;
    }
    @JsonProperty("patch_url")
    public String patchUrl;
    public IssueSearchResultItemPullRequest withPatchUrl(String patchUrl) {
        this.patchUrl = patchUrl;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IssueSearchResultItemPullRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}