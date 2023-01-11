package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryResponse
 * Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.google.com/assistant/smarthome/reference/intent/query). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ```
**/
public class QueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public QueryResponsePayload payload;
    public QueryResponse withPayload(QueryResponsePayload payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public QueryResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}