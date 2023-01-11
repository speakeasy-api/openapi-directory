package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route")
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute route;
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody withRoute(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute route) {
        this.route = route;
        return this;
    }
}