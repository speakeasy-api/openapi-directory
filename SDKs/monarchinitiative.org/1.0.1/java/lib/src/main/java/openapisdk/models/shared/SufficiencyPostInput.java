package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SufficiencyPostInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public Feature[] features;
    public SufficiencyPostInput withFeatures(Feature[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SufficiencyPostInput withId(String id) {
        this.id = id;
        return this;
    }
}