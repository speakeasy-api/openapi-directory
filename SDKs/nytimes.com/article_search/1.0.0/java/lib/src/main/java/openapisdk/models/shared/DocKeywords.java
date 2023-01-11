package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocKeywords {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DocKeywords withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public String rank;
    public DocKeywords withRank(String rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DocKeywords withValue(String value) {
        this.value = value;
        return this;
    }
}