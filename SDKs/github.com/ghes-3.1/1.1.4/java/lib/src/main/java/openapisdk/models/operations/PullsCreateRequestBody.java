package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsCreateRequestBody {
    @JsonProperty("base")
    public String base;
    public PullsCreateRequestBody withBase(String base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public PullsCreateRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draft")
    public Boolean draft;
    public PullsCreateRequestBody withDraft(Boolean draft) {
        this.draft = draft;
        return this;
    }
    @JsonProperty("head")
    public String head;
    public PullsCreateRequestBody withHead(String head) {
        this.head = head;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public Long issue;
    public PullsCreateRequestBody withIssue(Long issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer_can_modify")
    public Boolean maintainerCanModify;
    public PullsCreateRequestBody withMaintainerCanModify(Boolean maintainerCanModify) {
        this.maintainerCanModify = maintainerCanModify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PullsCreateRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}