package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometrySearchQueryExtRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geometryList")
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[] geometryList;
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBody withGeometryList(PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[] geometryList) {
        this.geometryList = geometryList;
        return this;
    }
}