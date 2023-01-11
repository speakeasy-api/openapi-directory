package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableGraphInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public WritableGraphInput withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableGraphInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("source")
    public String source;
    public WritableGraphInput withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public WritableGraphInput withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public WritableGraphInput withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}