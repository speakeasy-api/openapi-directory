package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateDiscussionCommentInOrgRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsCreateDiscussionCommentInOrgRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}