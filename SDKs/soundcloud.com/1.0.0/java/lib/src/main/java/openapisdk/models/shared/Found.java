package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Found {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Found withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Found withStatus(String status) {
        this.status = status;
        return this;
    }
}