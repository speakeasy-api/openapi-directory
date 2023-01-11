package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenAqProjectsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public OpenAqProjectsResultMeta meta;
    public OpenAqProjectsResult withMeta(OpenAqProjectsResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("results")
    public ProjectsRow[] results;
    public OpenAqProjectsResult withResults(ProjectsRow[] results) {
        this.results = results;
        return this;
    }
}