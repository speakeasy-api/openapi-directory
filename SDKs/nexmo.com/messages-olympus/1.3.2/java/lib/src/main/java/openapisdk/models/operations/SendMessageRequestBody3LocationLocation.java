package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3LocationLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public SendMessageRequestBody3LocationLocation withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("lat")
    public Double lat;
    public SendMessageRequestBody3LocationLocation withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonProperty("long")
    public Double long_;
    public SendMessageRequestBody3LocationLocation withLong(Double long_) {
        this.long_ = long_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SendMessageRequestBody3LocationLocation withName(String name) {
        this.name = name;
        return this;
    }
}