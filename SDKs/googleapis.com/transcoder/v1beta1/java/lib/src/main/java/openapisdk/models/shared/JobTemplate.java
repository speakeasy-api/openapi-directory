package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobTemplate
 * Transcoding job template resource.
**/
public class JobTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public JobConfig config;
    public JobTemplate withConfig(JobConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public JobTemplate withName(String name) {
        this.name = name;
        return this;
    }
}