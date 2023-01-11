package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitCreateRefRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public GitCreateRefRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public GitCreateRefRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public GitCreateRefRequestBody withSha(String sha) {
        this.sha = sha;
        return this;
    }
}