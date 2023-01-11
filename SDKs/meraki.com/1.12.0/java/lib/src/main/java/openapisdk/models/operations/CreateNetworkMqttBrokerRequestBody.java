package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkMqttBrokerRequestBody {
    @JsonProperty("host")
    public String host;
    public CreateNetworkMqttBrokerRequestBody withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkMqttBrokerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public CreateNetworkMqttBrokerRequestBody withPort(Long port) {
        this.port = port;
        return this;
    }
}