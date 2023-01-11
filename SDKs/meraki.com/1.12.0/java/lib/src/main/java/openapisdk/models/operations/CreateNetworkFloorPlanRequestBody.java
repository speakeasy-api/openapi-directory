package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkFloorPlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottomLeftCorner")
    public CreateNetworkFloorPlanRequestBodyBottomLeftCorner bottomLeftCorner;
    public CreateNetworkFloorPlanRequestBody withBottomLeftCorner(CreateNetworkFloorPlanRequestBodyBottomLeftCorner bottomLeftCorner) {
        this.bottomLeftCorner = bottomLeftCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottomRightCorner")
    public CreateNetworkFloorPlanRequestBodyBottomRightCorner bottomRightCorner;
    public CreateNetworkFloorPlanRequestBody withBottomRightCorner(CreateNetworkFloorPlanRequestBodyBottomRightCorner bottomRightCorner) {
        this.bottomRightCorner = bottomRightCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("center")
    public CreateNetworkFloorPlanRequestBodyCenter center;
    public CreateNetworkFloorPlanRequestBody withCenter(CreateNetworkFloorPlanRequestBodyCenter center) {
        this.center = center;
        return this;
    }
    @JsonProperty("imageContents")
    public String imageContents;
    public CreateNetworkFloorPlanRequestBody withImageContents(String imageContents) {
        this.imageContents = imageContents;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkFloorPlanRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topLeftCorner")
    public CreateNetworkFloorPlanRequestBodyTopLeftCorner topLeftCorner;
    public CreateNetworkFloorPlanRequestBody withTopLeftCorner(CreateNetworkFloorPlanRequestBodyTopLeftCorner topLeftCorner) {
        this.topLeftCorner = topLeftCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topRightCorner")
    public CreateNetworkFloorPlanRequestBodyTopRightCorner topRightCorner;
    public CreateNetworkFloorPlanRequestBody withTopRightCorner(CreateNetworkFloorPlanRequestBodyTopRightCorner topRightCorner) {
        this.topRightCorner = topRightCorner;
        return this;
    }
}