package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi withName(String name) {
        this.name = name;
        return this;
    }
}