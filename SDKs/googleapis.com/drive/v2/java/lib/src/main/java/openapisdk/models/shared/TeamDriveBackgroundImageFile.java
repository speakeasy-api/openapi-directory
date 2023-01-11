package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamDriveBackgroundImageFile
 * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
**/
public class TeamDriveBackgroundImageFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TeamDriveBackgroundImageFile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Float width;
    public TeamDriveBackgroundImageFile withWidth(Float width) {
        this.width = width;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xCoordinate")
    public Float xCoordinate;
    public TeamDriveBackgroundImageFile withXCoordinate(Float xCoordinate) {
        this.xCoordinate = xCoordinate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yCoordinate")
    public Float yCoordinate;
    public TeamDriveBackgroundImageFile withYCoordinate(Float yCoordinate) {
        this.yCoordinate = yCoordinate;
        return this;
    }
}