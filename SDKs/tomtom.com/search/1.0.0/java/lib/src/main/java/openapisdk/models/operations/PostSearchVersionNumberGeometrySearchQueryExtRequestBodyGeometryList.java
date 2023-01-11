package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radius")
    public Long radius;
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vertices")
    public String[] vertices;
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList withVertices(String[] vertices) {
        this.vertices = vertices;
        return this;
    }
}