package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Response {
    @JsonProperty("dispatch_uuid")
    public String dispatchUuid;
    public Response withDispatchUuid(String dispatchUuid) {
        this.dispatchUuid = dispatchUuid;
        return this;
    }
}