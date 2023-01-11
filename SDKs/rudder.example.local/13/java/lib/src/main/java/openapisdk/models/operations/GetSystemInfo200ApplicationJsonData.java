package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSystemInfo200ApplicationJsonData
 * Information about the service
**/
public class GetSystemInfo200ApplicationJsonData {
    @JsonProperty("rudder")
    public Object rudder;
    public GetSystemInfo200ApplicationJsonData withRudder(Object rudder) {
        this.rudder = rudder;
        return this;
    }
}