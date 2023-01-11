package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceIpAddress {
    @JsonProperty("address")
    public String address;
    public DeviceIpAddress withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public Long family;
    public DeviceIpAddress withFamily(Long family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DeviceIpAddress withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DeviceIpAddress withUrl(String url) {
        this.url = url;
        return this;
    }
}