package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackJourneyEvent429ApplicationJson
 * The error message should specify what cause the error
**/
public class TrackJourneyEvent429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public TrackJourneyEvent429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public TrackJourneyEvent429ApplicationJsonMeta meta;
    public TrackJourneyEvent429ApplicationJson withMeta(TrackJourneyEvent429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}