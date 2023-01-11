package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * VideoRecordingDetails
 * Recording information associated with the video.
**/
public class VideoRecordingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public GeoPoint location;
    public VideoRecordingDetails withLocation(GeoPoint location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationDescription")
    public String locationDescription;
    public VideoRecordingDetails withLocationDescription(String locationDescription) {
        this.locationDescription = locationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("recordingDate")
    public OffsetDateTime recordingDate;
    public VideoRecordingDetails withRecordingDate(OffsetDateTime recordingDate) {
        this.recordingDate = recordingDate;
        return this;
    }
}