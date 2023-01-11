package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackJourneyEvent500ApplicationJson
 * The error message should specify what cause the error
**/
public class TrackJourneyEvent500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public TrackJourneyEvent500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public TrackJourneyEvent500ApplicationJsonMeta meta;
    public TrackJourneyEvent500ApplicationJson withMeta(TrackJourneyEvent500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}