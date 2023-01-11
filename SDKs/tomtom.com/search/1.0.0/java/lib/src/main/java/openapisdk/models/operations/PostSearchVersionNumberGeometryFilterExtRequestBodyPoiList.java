package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress address;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList withAddress(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poi")
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi poi;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList withPoi(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi poi) {
        this.poi = poi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition position;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList withPosition(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition position) {
        this.position = position;
        return this;
    }
}