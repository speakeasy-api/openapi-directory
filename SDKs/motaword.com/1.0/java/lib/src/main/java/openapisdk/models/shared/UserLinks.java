package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public Href projects;
    public UserLinks withProjects(Href projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsivity")
    public Href responsivity;
    public UserLinks withResponsivity(Href responsivity) {
        this.responsivity = responsivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Href self;
    public UserLinks withSelf(Href self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public Href stats;
    public UserLinks withStats(Href stats) {
        this.stats = stats;
        return this;
    }
}