package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateDiscussionInOrgRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsCreateDiscussionInOrgRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public TeamsCreateDiscussionInOrgRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TeamsCreateDiscussionInOrgRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}