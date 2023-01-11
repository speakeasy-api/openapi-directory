package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventsV1SinkSinkTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public EventsV1SinkSinkTest withResult(String result) {
        this.result = result;
        return this;
    }
}