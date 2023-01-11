package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectSettings
 * Per-project settings for the Tool Results service.
**/
public class ProjectSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultBucket")
    public String defaultBucket;
    public ProjectSettings withDefaultBucket(String defaultBucket) {
        this.defaultBucket = defaultBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectSettings withName(String name) {
        this.name = name;
        return this;
    }
}