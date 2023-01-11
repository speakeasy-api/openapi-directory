package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public Destination withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public Destination withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAttachment")
    public String serviceAttachment;
    public Destination withServiceAttachment(String serviceAttachment) {
        this.serviceAttachment = serviceAttachment;
        return this;
    }
}