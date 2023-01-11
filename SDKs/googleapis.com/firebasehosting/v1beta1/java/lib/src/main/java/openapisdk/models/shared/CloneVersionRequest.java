package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloneVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude")
    public PathFilter exclude;
    public CloneVersionRequest withExclude(PathFilter exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalize")
    public Boolean finalize;
    public CloneVersionRequest withFinalize(Boolean finalize) {
        this.finalize = finalize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public PathFilter include;
    public CloneVersionRequest withInclude(PathFilter include) {
        this.include = include;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVersion")
    public String sourceVersion;
    public CloneVersionRequest withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
}