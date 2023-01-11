package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateWatchRequestInput
 * Create a new watch.
**/
public class CreateWatchRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watch")
    public WatchInput watch;
    public CreateWatchRequestInput withWatch(WatchInput watch) {
        this.watch = watch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchId")
    public String watchId;
    public CreateWatchRequestInput withWatchId(String watchId) {
        this.watchId = watchId;
        return this;
    }
}