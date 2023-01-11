package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[] destinations;
    public UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody withDestinations(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[] destinations) {
        this.destinations = destinations;
        return this;
    }
}