package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerProjectQuota
 * Represents a set of quotas for a given project
**/
public class PerProjectQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Images")
    public Quota images;
    public PerProjectQuota withImages(Quota images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iterations")
    public Quota iterations;
    public PerProjectQuota withIterations(Quota iterations) {
        this.iterations = iterations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectId")
    public String projectId;
    public PerProjectQuota withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Quota tags;
    public PerProjectQuota withTags(Quota tags) {
        this.tags = tags;
        return this;
    }
}