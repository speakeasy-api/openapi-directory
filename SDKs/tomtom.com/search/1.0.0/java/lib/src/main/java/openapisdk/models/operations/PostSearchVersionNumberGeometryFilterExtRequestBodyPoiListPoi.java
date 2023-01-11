package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi withName(String name) {
        this.name = name;
        return this;
    }
}