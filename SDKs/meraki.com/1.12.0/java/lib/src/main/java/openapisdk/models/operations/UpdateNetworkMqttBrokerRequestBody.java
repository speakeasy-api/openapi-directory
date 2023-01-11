package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkMqttBrokerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public UpdateNetworkMqttBrokerRequestBody withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkMqttBrokerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkMqttBrokerRequestBody withPort(Long port) {
        this.port = port;
        return this;
    }
}