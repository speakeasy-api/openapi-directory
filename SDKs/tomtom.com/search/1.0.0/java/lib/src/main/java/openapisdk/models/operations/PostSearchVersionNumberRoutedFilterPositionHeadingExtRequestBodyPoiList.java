package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress address;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList withAddress(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poi")
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi poi;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList withPoi(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi poi) {
        this.poi = poi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition position;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList withPosition(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition position) {
        this.position = position;
        return this;
    }
}