package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[] destinations;
    public UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody withDestinations(UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[] destinations) {
        this.destinations = destinations;
        return this;
    }
}