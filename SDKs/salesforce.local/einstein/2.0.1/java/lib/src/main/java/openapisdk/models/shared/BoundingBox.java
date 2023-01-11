package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoundingBox {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxX")
    public Integer maxX;
    public BoundingBox withMaxX(Integer maxX) {
        this.maxX = maxX;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxY")
    public Integer maxY;
    public BoundingBox withMaxY(Integer maxY) {
        this.maxY = maxY;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minX")
    public Integer minX;
    public BoundingBox withMinX(Integer minX) {
        this.minX = minX;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minY")
    public Integer minY;
    public BoundingBox withMinY(Integer minY) {
        this.minY = minY;
        return this;
    }
}