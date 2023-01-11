package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListManualTriggersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualTriggers")
    public ManualTrigger[] manualTriggers;
    public ListManualTriggersResponse withManualTriggers(ManualTrigger[] manualTriggers) {
        this.manualTriggers = manualTriggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListManualTriggersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}