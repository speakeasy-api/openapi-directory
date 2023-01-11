package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[] points;
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute withPoints(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[] points) {
        this.points = points;
        return this;
    }
}