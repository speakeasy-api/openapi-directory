package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveBackgroundImageFile
 * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
public class DriveBackgroundImageFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DriveBackgroundImageFile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Float width;
    public DriveBackgroundImageFile withWidth(Float width) {
        this.width = width;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xCoordinate")
    public Float xCoordinate;
    public DriveBackgroundImageFile withXCoordinate(Float xCoordinate) {
        this.xCoordinate = xCoordinate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yCoordinate")
    public Float yCoordinate;
    public DriveBackgroundImageFile withYCoordinate(Float yCoordinate) {
        this.yCoordinate = yCoordinate;
        return this;
    }
}