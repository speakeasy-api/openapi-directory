package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RgdidListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rgdIds")
    public Integer[] rgdIds;
    public RgdidListRequest withRgdIds(Integer[] rgdIds) {
        this.rgdIds = rgdIds;
        return this;
    }
}