package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContinuousProjectsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public ContinuousProjectsList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public ContinuousProject[] projects;
    public ContinuousProjectsList withProjects(ContinuousProject[] projects) {
        this.projects = projects;
        return this;
    }
}