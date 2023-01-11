package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryResponsePayload
 * Payload containing device states information.
**/
public class QueryResponsePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public java.util.Map<String, java.util.Map<String, Object>> devices;
    public QueryResponsePayload withDevices(java.util.Map<String, java.util.Map<String, Object>> devices) {
        this.devices = devices;
        return this;
    }
}