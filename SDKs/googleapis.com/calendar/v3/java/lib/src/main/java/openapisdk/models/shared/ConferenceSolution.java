package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSolution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUri")
    public String iconUri;
    public ConferenceSolution withIconUri(String iconUri) {
        this.iconUri = iconUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public ConferenceSolutionKey key;
    public ConferenceSolution withKey(ConferenceSolutionKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConferenceSolution withName(String name) {
        this.name = name;
        return this;
    }
}