package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkFloorPlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottomLeftCorner")
    public UpdateNetworkFloorPlanRequestBodyBottomLeftCorner bottomLeftCorner;
    public UpdateNetworkFloorPlanRequestBody withBottomLeftCorner(UpdateNetworkFloorPlanRequestBodyBottomLeftCorner bottomLeftCorner) {
        this.bottomLeftCorner = bottomLeftCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottomRightCorner")
    public UpdateNetworkFloorPlanRequestBodyBottomRightCorner bottomRightCorner;
    public UpdateNetworkFloorPlanRequestBody withBottomRightCorner(UpdateNetworkFloorPlanRequestBodyBottomRightCorner bottomRightCorner) {
        this.bottomRightCorner = bottomRightCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("center")
    public UpdateNetworkFloorPlanRequestBodyCenter center;
    public UpdateNetworkFloorPlanRequestBody withCenter(UpdateNetworkFloorPlanRequestBodyCenter center) {
        this.center = center;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageContents")
    public String imageContents;
    public UpdateNetworkFloorPlanRequestBody withImageContents(String imageContents) {
        this.imageContents = imageContents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkFloorPlanRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topLeftCorner")
    public UpdateNetworkFloorPlanRequestBodyTopLeftCorner topLeftCorner;
    public UpdateNetworkFloorPlanRequestBody withTopLeftCorner(UpdateNetworkFloorPlanRequestBodyTopLeftCorner topLeftCorner) {
        this.topLeftCorner = topLeftCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topRightCorner")
    public UpdateNetworkFloorPlanRequestBodyTopRightCorner topRightCorner;
    public UpdateNetworkFloorPlanRequestBody withTopRightCorner(UpdateNetworkFloorPlanRequestBodyTopRightCorner topRightCorner) {
        this.topRightCorner = topRightCorner;
        return this;
    }
}