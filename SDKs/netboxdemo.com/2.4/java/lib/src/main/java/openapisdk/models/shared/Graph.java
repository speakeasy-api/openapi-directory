package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Graph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Graph withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Graph withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Graph withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("source")
    public String source;
    public Graph withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonProperty("type")
    public GraphType type;
    public Graph withType(GraphType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public Graph withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}