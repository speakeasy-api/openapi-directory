package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometryFilterExtRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geometryList")
    public PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList[] geometryList;
    public PostSearchVersionNumberGeometryFilterExtRequestBody withGeometryList(PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList[] geometryList) {
        this.geometryList = geometryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiList")
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList[] poiList;
    public PostSearchVersionNumberGeometryFilterExtRequestBody withPoiList(PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList[] poiList) {
        this.poiList = poiList;
        return this;
    }
}