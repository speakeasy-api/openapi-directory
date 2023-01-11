package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodySpatial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("director_timeline")
    public EditVideoRequestBodySpatialDirectorTimeline[] directorTimeline;
    public EditVideoRequestBodySpatial withDirectorTimeline(EditVideoRequestBodySpatialDirectorTimeline[] directorTimeline) {
        this.directorTimeline = directorTimeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_of_view")
    public Double fieldOfView;
    public EditVideoRequestBodySpatial withFieldOfView(Double fieldOfView) {
        this.fieldOfView = fieldOfView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projection")
    public EditVideoRequestBodySpatialProjectionEnum projection;
    public EditVideoRequestBodySpatial withProjection(EditVideoRequestBodySpatialProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_format")
    public EditVideoRequestBodySpatialStereoFormatEnum stereoFormat;
    public EditVideoRequestBodySpatial withStereoFormat(EditVideoRequestBodySpatialStereoFormatEnum stereoFormat) {
        this.stereoFormat = stereoFormat;
        return this;
    }
}