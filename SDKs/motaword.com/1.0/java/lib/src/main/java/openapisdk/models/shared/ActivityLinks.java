package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Href comments;
    public ActivityLinks withComments(Href comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Href project;
    public ActivityLinks withProject(Href project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Href self;
    public ActivityLinks withSelf(Href self) {
        this.self = self;
        return this;
    }
}