package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProgressLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Href project;
    public ProgressLink withProject(Href project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Href self;
    public ProgressLink withSelf(Href self) {
        this.self = self;
        return this;
    }
}