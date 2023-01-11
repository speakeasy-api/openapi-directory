package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiList")
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[] poiList;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody withPoiList(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[] poiList) {
        this.poiList = poiList;
        return this;
    }
}