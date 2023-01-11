package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommentList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Comment[] activities;
    public CommentList withActivities(Comment[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public CommentList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
}