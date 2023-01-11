package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations withIp(String ip) {
        this.ip = ip;
        return this;
    }
}