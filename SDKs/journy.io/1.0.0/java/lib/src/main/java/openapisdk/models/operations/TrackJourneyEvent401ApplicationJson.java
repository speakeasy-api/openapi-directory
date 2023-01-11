package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackJourneyEvent401ApplicationJson
 * The error message should specify what cause the error
**/
public class TrackJourneyEvent401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public TrackJourneyEvent401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public TrackJourneyEvent401ApplicationJsonMeta meta;
    public TrackJourneyEvent401ApplicationJson withMeta(TrackJourneyEvent401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}