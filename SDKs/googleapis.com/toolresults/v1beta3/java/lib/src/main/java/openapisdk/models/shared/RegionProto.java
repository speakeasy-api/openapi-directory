package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionProto
 * A rectangular region.
**/
public class RegionProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPx")
    public Integer heightPx;
    public RegionProto withHeightPx(Integer heightPx) {
        this.heightPx = heightPx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leftPx")
    public Integer leftPx;
    public RegionProto withLeftPx(Integer leftPx) {
        this.leftPx = leftPx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topPx")
    public Integer topPx;
    public RegionProto withTopPx(Integer topPx) {
        this.topPx = topPx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPx")
    public Integer widthPx;
    public RegionProto withWidthPx(Integer widthPx) {
        this.widthPx = widthPx;
        return this;
    }
}