package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PingResponse
 * Basic ping response to verify authentication.
 * 
**/
public class PingResponse {
    @JsonProperty("meta")
    public PingResponseMeta meta;
    public PingResponse withMeta(PingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}